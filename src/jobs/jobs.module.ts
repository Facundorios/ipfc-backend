import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobOffer } from './entities/job.entity';
import { Company } from 'src/company/entities/company.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [JobsController],
  providers: [JobsService],
  imports: [TypeOrmModule.forFeature([JobOffer, Company]), AuthModule],
})
export class JobsModule {}
