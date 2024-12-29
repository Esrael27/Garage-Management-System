import { Module } from '@nestjs/common';
import { EmployeeModule } from '../employee/employee.module';
import { OrderModule } from '../order/order.module';
import { CustomerModule } from '../customer/customer.module';
import { InventoryModule } from '../inventory/inventory.module';
import { ReportModule } from '../report/report.module';
import { NotificationModule } from '../notification/notification.module';
import { FeedbackModule } from '../feedback/feedback.module';
import { AppointmentModule } from '../appointment/appointment.module';
import { ServiceModule } from '../service/service.module';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';



@Module({
  imports: [ConfigModule.forRoot(),
    EmployeeModule, OrderModule, 
    CustomerModule, InventoryModule, 
    ReportModule, NotificationModule, 
    FeedbackModule, AppointmentModule,
    ServiceModule, AuthModule],
    providers: [PrismaService],

})
export class AppModule {}
