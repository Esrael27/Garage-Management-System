import { IsEmail, IsNotEmpty, IsString, IsOptional, Matches, MinLength, IsPhoneNumber, IsEnum } from 'class-validator';

// Define EmployeeRole as an enum
export enum EmployeeRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  TECHNICIAN = 'TECHNICIAN',
}

// Define EmployeeRole as an enum
export enum ActiveStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export class UpdateEmployeeDto {
  @IsEmail({}, { message: 'Invalid email address.' })
  @IsNotEmpty({ message: 'Email is required.' })
  employee_email: string;

  @IsNotEmpty({ message: 'First name is required.' })
  @IsString({ message: 'First name must be a string.' })
  employee_first_name: string;

  @IsNotEmpty({ message: 'Last name is required.' })
  @IsString({ message: 'Last name must be a string.' })
  employee_last_name: string;

  @IsOptional()
  @IsPhoneNumber(null, { message: 'Invalid phone number.' }) // Optional phone number validation
  employee_phone?: string;

  @IsNotEmpty({ message: 'Password is required.' })
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  @Matches(/(?=.*[A-Z])/, { message: 'Password must contain at least one uppercase letter.' })
  @Matches(/(?=.*[a-z])/, { message: 'Password must contain at least one lowercase letter.' })
  @Matches(/(?=.*\d)/, { message: 'Password must contain at least one number.' })
  employee_password: string;

  @IsNotEmpty({ message: 'Role is required.' })
  @IsEnum(EmployeeRole, { message: 'Invalid role. Must be one of: ADMIN, MANAGER, or TECHNICIAN.' })
  employee_role_name: EmployeeRole;
  
  @IsOptional()
  @IsNotEmpty({ message: 'Role is required.' })
  @IsEnum(ActiveStatus, { message: 'Invalid active status. Must be one of: ACTIVE, INACTIVE' })
   active_employee: ActiveStatus;
}
