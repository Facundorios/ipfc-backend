import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CompanyContract,
  CompanyIndustry,
  JobModality,
  JobSkill,
  WorldCountry,
  WorldLanguage,
} from './entities';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      CompanyContract,
      CompanyIndustry,
      JobModality,
      JobSkill,
      WorldCountry,
      WorldLanguage,
    ]),
  ],
  exports: [SeedService],
})
export class SeedModule {}
