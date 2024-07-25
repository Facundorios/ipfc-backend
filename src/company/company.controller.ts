import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { RawHeaders } from 'src/auth/decorators/headers.decorator';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('create')
  create(
    @Body() createCompanyDto: CreateCompanyDto,
    @RawHeaders() headers: string,
  ) {
    console.log(headers);
    return this.companyService.create(createCompanyDto);
  }

  @Get('list')
  seachCompanies() {
    return this.companyService.findAll();
  }

  @Get(':id')
  searchCompany(@Param('id', ParseUUIDPipe) id: string) {
    return this.companyService.findOne(id);
  }

  @Patch('update-status/:id/:status')
  updateCompanyStatus(
    @Param('id') id: string,
    @Param('status') status: string,
  ) {
    return this.companyService.setCompanyStatus(id, status);
  }
}
