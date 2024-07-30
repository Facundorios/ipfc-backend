import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  executeSeed() {
    this.seedService.roleSeed();
    this.seedService.companyIndustrySeed();
    this.seedService.jobModalitySeed();
    this.seedService.companyContractSeed();
    this.seedService.countrySeed();
    this.seedService.languageSeed();
    this.seedService.jobSkillSeed()
  } 
}
  