import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @IsNotEmpty()
    @IsString()
    employee_email: string;

    @IsNotEmpty()
    @IsString()
    employee_password_hashed : string;
}