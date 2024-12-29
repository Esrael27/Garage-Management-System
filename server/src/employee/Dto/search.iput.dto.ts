import { IsOptional, IsString } from 'class-validator';

export class SearchEmployeeDto {
  @IsOptional()
  @IsString()
  employee_first_name?: string;

  @IsOptional()
  @IsString()
  employee_email?: string;

  @IsOptional()
  @IsString()
  employee_phone?: string;
}
