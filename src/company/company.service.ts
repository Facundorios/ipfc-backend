import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateCompanyDto } from './dto/create-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';
import { CompanyContract, CompanyIndustry } from 'src/seed/entities';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepostiroy: Repository<Company>,

    @InjectRepository(CompanyContract)
    private readonly contractRepository: Repository<CompanyContract>,

    @InjectRepository(CompanyIndustry)
    private readonly industryRepository: Repository<CompanyIndustry>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    try {
      const contract = await this.contractRepository.findOneBy({
        id: createCompanyDto.contractId,
      });
      if (!contract) throw new NotFoundException(`El contrato no existe.`);

      const industry = await this.industryRepository.findOneBy({
        id: createCompanyDto.industryId,
      });
      if (!industry) throw new NotFoundException(`La industria no existe.`);

      const company = this.companyRepostiroy.create({
        ...createCompanyDto,
        contract: contract,
        industry: industry,
      });
      await this.companyRepostiroy.save(company);
      console.log(company);
    } catch (error) {
      console.log(error);
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
