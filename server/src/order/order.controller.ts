import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('admin')
export class OrderController {
     // Add a new order
  @Post("add-order")
  async addorder(){

  }
  // get order by id
  @Get("order/:id")
  getorderById() {
  
  }
 // get all orders
 @Get("orders")
 getAllorders() {

 }

 // edit order 
@Put("order/{hash}/:id/edit")
async editorder () {

}

 // delete order
 @Delete("order/delete/:id")
 async deleteorder() {
 }

// search order by id
@Get("order/search/:id")
searchOrderById() {

}

// search order by customer
@Get("order/search/customer/:name")
searchOrderByCustomer() {

}

// search order by status
@Get("order/search/status/:status")
searchOrderByStatus() {

}

// search order by vehicle
@Get("order/search/vehicle/:vehicle")
searchOrderByVehicle() {
   
}

}