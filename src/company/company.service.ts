import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateCompanyDto } from './dto/create-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepostiroy: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    try {
      this.companyRepostiroy.create(createCompanyDto);
      await this.companyRepostiroy.save(createCompanyDto);
    } catch (error) {
      if (error.code === '23505')
        throw new BadRequestException('La empresa ya existe.');
      throw new BadRequestException(`${error}`);
    }
  }

  async findAll() {
    try {
      return this.companyRepostiroy.find();
    } catch (error) {
      throw new BadRequestException(`${error}`);
    }
  }

  async findOne(id: string) {
    const company = await this.companyRepostiroy.findOneBy({ id });
    if (!company) throw new NotFoundException(`La empresa no fue encontrada.`);
    return company;
  }

  async setCompanyStatus(id: string, status: string) {
    try {
      const company = await this.findOne(id);
      if (!company) throw new NotFoundException(`La empresa no existe`);
      await this.companyRepostiroy.update(id, { status });
      return `La empresa ha sido  ${status}.`;
    } catch (error) {
      throw new BadRequestException(`${error}`);
    }
  }
}
