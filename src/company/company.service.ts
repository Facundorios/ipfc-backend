import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';
import { JobOfferDto } from './dto/create-job-offer.dto';
import { JobOffer } from './entities/company-job-offer.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepostiroy: Repository<Company>,

    @InjectRepository(JobOffer)
    private readonly jobOfferRepository: Repository<JobOffer>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    return this.companyRepostiroy.save(createCompanyDto);
  }

  async findAll() {
    return this.companyRepostiroy.find();
  }

  async findOne(id: string) {
    const company = await this.companyRepostiroy.findOneBy({ id });
    return company;
  }

  async setCompanyStatus(id: string, status: string) {
    try {
      const company = this.findOne(id);
      if (!company) throw new Error(`Company with id ${id} not found`);
      const companyStatus = await this.companyRepostiroy.update(id, { status });

      return companyStatus;
    } catch (error) {
      throw new BadRequestException(`${error}`);
    }
  }

  async createJobOffer(id: string, jobOfferDto: JobOfferDto) {
    const company = await this.companyRepostiroy.findOneBy({
      id,
    });
    if (!company) throw new Error(`Company with id ${id} not found`);
    const jobOffer = this.jobOfferRepository.create(jobOfferDto);
    jobOffer.company = company;
    await this.jobOfferRepository.save(jobOffer);
    return jobOffer;
  }
}
