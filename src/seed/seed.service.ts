import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Role } from 'src/auth/entities/userRole.entity';
import { ValidRoles } from 'src/auth/interfaces/valid-roles.interface';
import {
  companyContracts,
  companyIndustries,
  jobModalities,
  countriesWorld,
  languagesWorld,
} from './data';
import {
  CompanyContract,
  CompanyIndustry,
  JobModality,
  WorldCountry,
  Language,
} from './entities';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,

    @InjectRepository(CompanyIndustry)
    private readonly companyIndustryRepository: Repository<CompanyIndustry>,

    @InjectRepository(JobModality)
    private readonly jobModalityRepository: Repository<JobModality>,

    @InjectRepository(CompanyContract)
    private readonly companyContractRepository: Repository<CompanyContract>,

    @InjectRepository(WorldCountry)
    private readonly worldCountryRepository: Repository<WorldCountry>,

    @InjectRepository(Language)
    private readonly languageRepository: Repository<Language>,
  ) {}

  async roleSeed() {
    await this.roleRepository.delete({});
    const roles = Object.values(ValidRoles).map((role) => ({ role }));
    await this.roleRepository.insert(roles);
    return roles;
  }

  async companyIndustrySeed() {
    await this.companyIndustryRepository.delete({});
    const industries = Object.values(companyIndustries).map((industry) => {
      return this.companyIndustryRepository.create(industry);
    });
    return this.companyIndustryRepository.save(industries);
  }

  async jobModalitySeed() {
    await this.jobModalityRepository.delete({});
    const modalities = Object.values(jobModalities).map((modality) => {
      return this.jobModalityRepository.create(modality);
    });
    return this.jobModalityRepository.save(modalities);
  }

  async companyContractSeed() {
    await this.companyContractRepository.delete({});
    const contracts = Object.values(companyContracts).map((contract) => {
      return this.companyContractRepository.create(contract);
    });
    return this.companyContractRepository.save(contracts);
  }

  async worldCountrySeed() {
    await this.worldCountryRepository.delete({});
    const countries = Object.values(countriesWorld).map((country) => {
      return this.worldCountryRepository.create(country);
    });
    return this.worldCountryRepository.save(countries);
  }

  async languageSeed() {
    await this.languageRepository.delete({});
    const languages = Object.values(languagesWorld).map((language) => {
      return this.languageRepository.create(language);
    });
    return this.languageRepository.save(languages);
  }
}
