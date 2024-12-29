import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
// Controller for handling authentication routes
export class AuthController {
  constructor(private authService: AuthService) {} // Injecting AuthService to handle authentication logic

  @Post('login')
  // POST route for user login
  async login(
    @Body() loginDto: LoginDto,  // The body of the request contains login credentials
  ) {
    try {
      // Calling the login method from AuthService with the provided email and hashed password
      return this.authService.login(loginDto.employee_email, loginDto.employee_password_hashed);
    } catch (error) {
      // If an error occurs during the login process, check if it's an instance of HttpException
      if (error instanceof HttpException) {
        // If it's an HttpException, throw it to be handled by the global error filter or interceptor
        throw error;
      }
      
      // Handle other types of errors (e.g., unknown errors)
      throw new HttpException('Internal Server Error', 500);
    }
  }
}
