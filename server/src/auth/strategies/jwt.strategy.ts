import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
// Passport strategy for JWT authentication
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,  // Inject ConfigService to access environment variables
    private prisma: PrismaService,        // Inject PrismaService to query the database
  ) {
    super({
      // Extract JWT token from the Authorization header as a Bearer token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Get JWT secret key from environment variables
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  // The 'validate' method is called after JWT verification to check user details
  async validate(payload: { userId: number; role: string; exp: number }) {
    // Check if the token has expired by comparing the 'exp' field from payload with the current timestamp
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (payload.exp < currentTimestamp) {
      // If expired, throw an UnauthorizedException
      throw new UnauthorizedException('Token has expired');
    }

    // Query the database to find the employee based on the 'userId' from the payload
    const employee = await this.prisma.employee.findUnique({
      where: { employee_id: payload.userId },
    });

    // If no employee is found, the token is considered invalid
    if (!employee) {
      // Throw UnauthorizedException if employee is not found
      throw new UnauthorizedException('Unauthorized');
    }

    // Return the employee object to indicate successful validation
    return employee;
  }
}
