import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
// AuthService handles authentication-related business logic
export class AuthService {
  constructor(
    private prisma: PrismaService,  // Injecting PrismaService to interact with the database
    private jwtService: JwtService,  // Injecting JwtService to create and sign JWT tokens
  ) {}

  // Login method to authenticate the employee and generate a JWT token
  async login(email: string, password: string) {
    
    // Fetch employee by email, including EmployeeInfo and EmployeePass for validation and user details
    const employee = await this.prisma.employee.findUnique({
      where: { employee_email: email },  // Search for the employee based on the email
      include: { EmployeeInfo: true, EmployeePass: true },  // Include related EmployeeInfo and EmployeePass data
    });

    // If the employee is not found, throw UnauthorizedException with an appropriate message
    if (!employee) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    // Compare the provided password with the stored hashed password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, employee.EmployeePass.employee_password_hashed);
    if (!isPasswordValid) {
      // If the password doesn't match, throw UnauthorizedException
      throw new UnauthorizedException('Incorrect email or password');
    }

    // Destructure the employee data to use for creating the JWT payload and response
    const { employee_id, employee_role, employee_email, EmployeeInfo, active_employee } = employee;

    // Prepare the JWT payload, which contains user ID and role
    const payload = { userId: employee_id, role: employee_role };

    // Create and sign the JWT with the payload. You can also include an expiration here if needed.
    const accessToken = this.jwtService.sign(payload);

    // Return the generated access token along with employee details
    return {
      access_token: accessToken,  // The signed JWT token to authenticate subsequent requests
      employee_email,  // The employee's email to be sent back in the response
      employee_first_name: EmployeeInfo?.employee_first_name, // First name from EmployeeInfo (using optional chaining)
      employee_last_name: EmployeeInfo?.employee_last_name, // Last name from EmployeeInfo (using optional chaining)
      employee_phone: EmployeeInfo?.employee_phone, // Employee phone number from EmployeeInfo (using optional chaining)
      active_employee, // Whether the employee is active
    };
  }
}
