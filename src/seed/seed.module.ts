import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyIndustry } from './entities/company-industry.entity';
import { CompanyModality } from './entities/company-modality.entity';
import { CompanyContract } from './entities/company-contract.entity';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      CompanyIndustry,
      CompanyModality,
      CompanyContract,
    ]),
  ],
})
export class SeedModule {}
