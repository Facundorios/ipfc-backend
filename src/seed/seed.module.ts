import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CompanyContract,
  CompanyIndustry,
  JobModality,
  WorldCountry,
  WorldLanguage,
} from './entities';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      CompanyIndustry,
      JobModality,
      CompanyContract,
      WorldCountry,
      WorldLanguage,
    ]),
  ],
  exports: [SeedService],
})
export class SeedModule {}
