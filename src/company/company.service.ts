import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepostiroy: Repository<Company>,
  ) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.companyRepostiroy.save(createCompanyDto);
  }

  findAll() {
    return this.companyRepostiroy.find();
  }

  setCompanyStatus(id: string, status: string) {
    return this.companyRepostiroy.update(id, { status: status})
  }
}
