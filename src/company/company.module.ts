import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Association } from 'src/associations/entities/association.entity';
import { JobOffer } from 'src/jobs/entities/job.entity';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService],
  imports: [TypeOrmModule.forFeature([Company, Association, JobOffer])],
})
export class CompanyModule {}
