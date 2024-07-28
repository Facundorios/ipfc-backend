import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Role } from 'src/auth/entities';
import { ValidRoles } from 'src/auth/interfaces/valid-roles.interface';

import {
  companyContracts,
  companyIndustries,
  jobModalities,
  jobSkills,
  worldCountries,
  worldLanguages,
} from './data';
import {
  CompanyContract,
  CompanyIndustry,
  JobModality,
  JobSkill,
  WorldCountry,
  WorldLanguage,
} from './entities';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,

    @InjectRepository(CompanyIndustry)
    private readonly industryRepository: Repository<CompanyIndustry>,

    @InjectRepository(JobModality)
    private readonly modalityRepository: Repository<JobModality>,

    @InjectRepository(CompanyContract)
    private readonly contractRepository: Repository<CompanyContract>,

    @InjectRepository(WorldCountry)
    private readonly countryRepository: Repository<WorldCountry>,

    @InjectRepository(WorldLanguage)
    private readonly languageRepository: Repository<WorldLanguage>,

    @InjectRepository(JobSkill)
    private readonly skillRepository: Repository<JobSkill>,
  ) {}

  async roleSeed() {
    await this.roleRepository.delete({});
    const roles = Object.values(ValidRoles).map((role) => ({ role }));
    await this.roleRepository.insert(roles);
    return roles;
  }
  async companyIndustrySeed() {
    await this.industryRepository.delete({});
    const industries = Object.values(companyIndustries).map((industry) => {
      return this.industryRepository.create(industry);
    });
    return this.industryRepository.save(industries);
  }
  async jobModalitySeed() {
    await this.modalityRepository.delete({});
    const modalities = Object.values(jobModalities).map((modality) => {
      return this.modalityRepository.create(modality);
    });
    return this.modalityRepository.save(modalities);
  }
  async companyContractSeed() {
    await this.contractRepository.delete({});
    const contracts = Object.values(companyContracts).map((contract) => {
      return this.contractRepository.create(contract);
    });
    return this.contractRepository.save(contracts);
  }
  async countrySeed() {
    await this.countryRepository.delete({});
    const countries = Object.values(worldCountries).map((country) => {
      return this.countryRepository.create(country);
    });
    return this.countryRepository.save(countries);
  }
  async languageSeed() {
    await this.languageRepository.delete({});
    const languages = Object.values(worldLanguages).map((language) => {
      return this.languageRepository.create(language);
    });
    return this.languageRepository.save(languages);
  }
  async jobSkillSeed() {
    await this.skillRepository.delete({});
    const skills = Object.values(jobSkills).map((skill) => {
      return this.skillRepository.create(skill);
    });
    return this.skillRepository.save(skills);
  }
}
