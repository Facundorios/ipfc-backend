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
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ValidRoles } from 'src/auth/interfaces';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Auth(ValidRoles.recruiter)
  @Post('create')
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Auth(ValidRoles.recruiter)
  @Get('list')
  seachCompanies() {
    return this.companyService.findAll();
  }

  @Auth(ValidRoles.recruiter)
  @Get(':id')
  searchCompany(@Param('id', ParseUUIDPipe) id: string) {
    return this.companyService.findOne(id);
  }

  @Auth(ValidRoles.admin)
  @Patch('update-status/:id/:status')
  updateCompanyStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('status') status: string,
  ) {
    return this.companyService.setStatus(id, status);
  }
}
