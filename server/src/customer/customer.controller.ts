import { Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
     // Add a new customer
  @Post("add-customer")
  async addcustomer(){

  }

  // add vehicle to customer
  @Post("customer/:customerId/add-vehicle")
  addVehicleToCustomer() {

  }
  // get customer by id
  @Get("customer/:id")
  getcustomerById() {
  
  }
 // get all customers
 @Get("customers")
 getAllcustomers() {

 }

 // edit customer 
@Put("customer/edit/:id")
async editcustomer () {

}

 // delete customer
 @Delete("customer/delete/:id")
 async deletecustomer() {
 }
 
// find customers by name, email, or phone number
@Get("customers/search")
async findCustomers(@Query("name") name: string, @Query("email") email: string, @Query("phone") phone: string) {
   // your code here
}
}
