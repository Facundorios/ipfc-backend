import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobOffer } from './entities/job.entity';
import { Repository } from 'typeorm';
import { Company } from 'src/company/entities/company.entity';
import { JobOfferDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(JobOffer)
    private readonly jobOfferRepository: Repository<JobOffer>,

    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async createJobOffer(id: string, jobOfferDto: JobOfferDto) {
    const company = await this.companyRepository.findOneBy({
      id,
    });
    if (!company)
      throw new NotFoundException(`Company with id ${id} not found`);
    const jobOffer = this.jobOfferRepository.create(jobOfferDto);
    jobOffer.company = company;
    await this.jobOfferRepository.save(jobOffer);
    return jobOffer;
  }
}
