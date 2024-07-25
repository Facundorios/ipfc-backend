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
    
    return this.companyRepostiroy.save(createCompanyDto);
  }

  async findAll() {
    return this.companyRepostiroy.find();
  }

  async findOne(id: string) {
    const company = await this.companyRepostiroy.findOneBy({ id });
    if (!company)
      throw new NotFoundException(
        `La empresa con el id: ${id}, no se encuentra en la base de datos`,
      );
    return company;
  }

  async setCompanyStatus(id: string, status: string) {
    try {
      const company = await this.findOne(id);
      if (!company) throw new NotFoundException(`La Compañia no existe`);
      await this.companyRepostiroy.update(id, { status });
      return company;
    } catch (error) {
      throw new BadRequestException(`${error}`);
    }
  }
}
