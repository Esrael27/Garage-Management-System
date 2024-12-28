import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('admin')
export class ServiceController {
     // Add a new service
  @Post("add-service")
  async addservice(){

  }
  // get service by id
  @Get("service/:id")
  getserviceById() {
  
  }
 // get all services
 @Get("services")
 getAllservices() {

 }

 // edit service 
@Put("service/edit/:id")
async editservice () {

}

 // delete service
 @Delete("service/delete/:id")
 async deleteservice() {
 }

}
