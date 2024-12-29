import { ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { RegisterEmployeeDto } from './Dto/register.employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UpdateEmployeeDto } from './Dto/update.employee.dto';
@Injectable()
export class EmployeeService {
constructor(private prisma: PrismaService){}
    
  // Add a new employee
  async addEmployee(registerEmployeeDto: RegisterEmployeeDto) {
    try {
      // Check if the email already exists
      const existingEmail = await this.prisma.employee.findUnique({
        where: {
          employee_email: registerEmployeeDto.employee_email,
        },
      });
  
      if (existingEmail) {
        throw new ConflictException({
          statusCode: HttpStatus.CONFLICT,
          message: 'Employee Email already exists',
          conflictField: 'employee_email',
        });
      }
  

      // Hash the password before storing it
      const hashedPassword = await this.hashPassword(registerEmployeeDto.employee_password);
      // If email does not exist, proceed to add the employee
      const newEmployee = await this.prisma.employee.create({
        data: {
        employee_email: registerEmployeeDto.employee_email,
        employee_role: registerEmployeeDto.employee_role_name,
        active_employee: registerEmployeeDto.active_employee,
        EmployeeInfo: {
          create:{
            employee_first_name: registerEmployeeDto.employee_first_name,
            employee_last_name: registerEmployeeDto.employee_last_name,
            employee_phone: registerEmployeeDto.employee_phone,
          }
        },
        EmployeePass:{
          create:{
            employee_password_hashed: hashedPassword,
          }
        },
     
        },
      });
  
      return newEmployee;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
    }
  }
  
  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }
  // get employee by id
 async getEmployeeById(employeeId: number) {
  try {
     // check if employee exists
     const employee = await this.prisma.employee.findUnique({
       where: {
         employee_id: employeeId,
       },
       include:{
        EmployeeInfo: true,
       }
     });
     if (!employee) {
       throw new NotFoundException(`Employee with ID ${employeeId} not found`);
     }
     return employee;
  } catch (error) {
    if (error instanceof HttpException) {
      throw error;
    }
  }
  }
 // get all employees
 async getAllEmployees() {
      try {
        // Check if there are any employees
        const employeeCount = await this.prisma.employee.count();

        // If there are no employees, throw a not found exception
        if (employeeCount === 0) {
          throw new NotFoundException('No employees found');
        }
        // Fetch all employees with their respective information and roles
        const employees = await this.prisma.employee.findMany({
          include: {
            EmployeeInfo: true
          },
        });

        return employees;
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }
      }
 }

 // edit employee 
async editEmployee (
  employeeId: number,
  updateEmployeeDto: UpdateEmployeeDto,
) {
  try {
    // Check if the employee exists
    const employee = await this.prisma.employee.findUnique({
      where: {
        employee_id: employeeId,
      },
    });

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    
    // Update the employee's details
    const updatedEmployee = await this.prisma.employee.update({
      where: {
        employee_id: employeeId,
       
      },
      data: {
         employee_email:updateEmployeeDto.employee_email,
         active_employee:updateEmployeeDto.active_employee,
         employee_role:updateEmployeeDto.employee_role_name,
          EmployeeInfo:{
            update:{
              employee_first_name:updateEmployeeDto.employee_first_name,
              employee_last_name:updateEmployeeDto.employee_last_name,
              employee_phone:updateEmployeeDto.employee_phone,
            }
          },
      
      },
    });
  } catch (error) {
    if (error instanceof HttpException) {
      throw error;
    }
  }
}

 // delete employee

 async deleteEmployee(
  employeeId: number,
 ) {
      try {
        const employee = await this.prisma.employee.findUnique({
          where: { employee_id: employeeId },
          include: {
            EmployeeInfo: true,
            EmployeePass: true,
          },
        });

        if (!employee) {
          throw new NotFoundException(`Employee with ID ${employeeId} not found`);
        }
        const deleteEmployee = await this.prisma.employee.delete({
          where: {
            employee_id: employeeId,
          },
        })
        
        return deleteEmployee;
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        
      }
      }
 }

}
