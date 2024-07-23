import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('create')
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get('list')
  seachCompanies() {
    return this.companyService.findAll();
  }

  @Patch('update-status/:id/:status')
  updateStatus(@Param('id') id: string, @Param('status') status: string) {
    return this.companyService.setCompanyStatus(id, status);
  }
}
