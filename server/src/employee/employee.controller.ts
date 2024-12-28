import { Controller, Delete, Get, Post, Put } from '@nestjs/common';


@Controller('admin')
export class EmployeeController {


  // Add a new employee
  @Post("add-employee")
  async addEmployee(){

  }
  // get employee by id
  @Get("employee/:id")
  getEmployeeById() {
  
  }
 // get all employees
 @Get("employees")
 getAllEmployees() {

 }

 // edit employee 
@Put("employee/edit/:id")
async editEmployee () {

}

 // delete employee
 @Delete("employee/delete/:id")
 async deleteEmployee() {
 }

 
}


