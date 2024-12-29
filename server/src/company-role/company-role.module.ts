import { Module } from '@nestjs/common';
import { CompanyRoleController } from './company-role.controller';
import { CompanyRoleService } from './company-role.service';

@Module({
  controllers: [CompanyRoleController],
  providers: [CompanyRoleService]
})
export class CompanyRoleModule {}
