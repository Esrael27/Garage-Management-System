import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { RegisterEmployeeDto } from './Dto/register.employee.dto';
import { EmployeeService } from './employee.service';
import { UpdateEmployeeDto } from './Dto/update.employee.dto';
import { SearchEmployeeDto } from './Dto/search.iput.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';

@ApiTags('employees')
@Controller('admin')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  // Add a new employee
  @Post('add-employee')
  @ApiOperation({ summary: 'Add a new employee' })
  @ApiResponse({ status: 201, description: 'Employee added successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBody({ type: RegisterEmployeeDto })
  async addEmployee(@Body() registerEmployeeDto: RegisterEmployeeDto) {
    try {
      const employee = await this.employeeService.addEmployee(registerEmployeeDto);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Employee added successfully',
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
    }
  }

  // Get employee by ID
  @Get('employee/:id')
  @ApiOperation({ summary: 'Get an employee by ID' })
  @ApiResponse({ status: 200, description: 'Employee fetched successfully' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  @ApiParam({ name: 'id', type: Number, description: 'Employee ID' })
  async getEmployeeById(@Param('id', ParseIntPipe) employeeId: number) {
    try {
      const employee = await this.employeeService.getEmployeeById(employeeId);
      return {
        statusCode: HttpStatus.OK,
        message: 'Employee fetched successfully',
        data: employee,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
    }
  }

  // Get all employees
  @Get('employees')
  @ApiOperation({ summary: 'Get all employees' })
  @ApiResponse({ status: 200, description: 'List of employees' })
  async getAllEmployees() {
    try {
      const employees = await this.employeeService.getAllEmployees();
      return {
        statusCode: HttpStatus.OK,
        message: 'Employees fetched successfully',
        data: employees,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
    }
  }

  // Edit employee
  @Put('employee/edit/:id')
  @ApiOperation({ summary: 'Edit an employee' })
  @ApiResponse({ status: 200, description: 'Employee updated successfully' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  @ApiParam({ name: 'id', type: Number, description: 'Employee ID' })
  @ApiBody({ type: UpdateEmployeeDto })
  async editEmployee(
    @Param('id', ParseIntPipe) employeeId: number,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    try {
      const updatedEmployee = await this.employeeService.editEmployee(employeeId, updateEmployeeDto);
      return {
        statusCode: HttpStatus.OK,
        message: 'Employee updated successfully',
        data: updatedEmployee,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
    }
  }

  // Delete employee
  @Delete('employee/delete/:id')
  @ApiOperation({ summary: 'Delete an employee' })
  @ApiResponse({ status: 200, description: 'Employee deleted successfully' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  @ApiParam({ name: 'id', type: Number, description: 'Employee ID' })
  async deleteEmployee(@Param('id', ParseIntPipe) employeeId: number) {
    try {
      const deleteEmployee = await this.employeeService.deleteEmployee(employeeId);
      return {
        statusCode: HttpStatus.OK,
        message: 'Employee deleted successfully',
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
    }
  }
}
