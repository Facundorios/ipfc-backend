import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { JobOffer } from './entities/jobOffer.entity';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService],
  imports: [TypeOrmModule.forFeature([Company, JobOffer])],
})
export class CompanyModule {}
