import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { RegisterEmployeeDto } from './Dto/register.employee.dto';
import { EmployeeService } from './employee.service';
import { UpdateEmployeeDto } from './Dto/update.employee.dto';


@Controller('admin')
export class EmployeeController {

constructor (private employeeService: EmployeeService) {}
  // Add a new employee
  @Post("add-employee")
  async addEmployee(
    @Body() registerEmployeeDto: RegisterEmployeeDto,
  ){
     try {
      
      const employee = await this.employeeService.addEmployee(registerEmployeeDto);

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Employee added successfully',
      }
      // Code to add a new employee
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
    }
  }
  // get employee by id
  @Get("employee/:id")
  async getEmployeeById(
    @Param('id', ParseIntPipe) employeeId: number,
  ) {
     try {
      
      const employee = await this.employeeService.getEmployeeById(employeeId);

      return {
        statusCode: HttpStatus.OK,
        message: 'Employee fetched successfully',
        data: employee
      }
     } catch (error) {
       if (error instanceof HttpException) {
        throw error;
      }
     }
  }
 // get all employees
 @Get("employees")
 async getAllEmployees() {
    try {
      const employees = await this.employeeService.getAllEmployees();

      return {
        statusCode: HttpStatus.OK,
        message: 'Employees fetched successfully',
        data: employees
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
    }
 }

 // edit employee 
@Put("employee/edit/:id")
async editEmployee (
  @Param('id', ParseIntPipe) employeeId: number,
  @Body() updateEmployeeDto: UpdateEmployeeDto,
) {
  try {
    // update employee 
    const updatedEmployee = await this.employeeService.editEmployee(employeeId, updateEmployeeDto);
    
    return {
      statusCode: HttpStatus.OK,
      message: 'Employee updated successfully',
      data: updatedEmployee
    }
  } catch (error) {
    if (error instanceof HttpException) {
      throw error;
    }
    
  }
}

 // delete employee
 @Delete("employee/delete/:id")
 async deleteEmployee(@Param('id', ParseIntPipe) employeeId: number) {
  try {
    const deleteEmployee = await this.employeeService.deleteEmployee(employeeId);
    
    return {
      statusCode: HttpStatus.OK,
      message: 'Employee deleted successfully',
    }
  } catch (error) {
    if (error instanceof HttpException) {
      throw error;
    
  }
 }
}

}
