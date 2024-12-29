import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    // Importing PassportModule to handle authentication strategies
    PassportModule.register({ defaultStrategy: 'jwt' }), 

    // Configuring JwtModule to handle JWT creation and validation
    JwtModule.registerAsync({
      imports: [ConfigModule],  // Importing ConfigModule to use environment variables
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),  // Fetching JWT secret from environment variables
        signOptions: {
          expiresIn: configService.get('JWT_EXPIRATION'),  // Setting the JWT expiration time from environment variables
        },
      }),
      inject: [ConfigService], // Injecting ConfigService to access environment variables
    }),
  ],
  providers: [
    AuthService,    // Providing AuthService to handle authentication logic
    JwtStrategy,    // Providing JwtStrategy to handle JWT validation during requests
    PrismaService,  // Providing PrismaService to query the database for user data
  ],
  controllers: [AuthController],  // Registering AuthController to handle HTTP requests
})
export class AuthModule {}
