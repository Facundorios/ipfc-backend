import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Role } from 'src/auth/entities/userRole.entity';

import { ValidRoles } from 'src/auth/interfaces/valid-roles.interface';

import { companyIndustries } from './data/industriesCompanyt';
import { companyModalities } from './data/modalityCompany';
import { companyContracts } from './data/contractsCompany';

import { CompanyIndustry } from './entities/company-industry.entity';
import { CompanyModality } from './entities/company-modality.entity';
import { CompanyContract } from './entities/company-contract.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,

    @InjectRepository(CompanyIndustry)
    private readonly companyIndustryRepository: Repository<CompanyIndustry>,

    @InjectRepository(CompanyModality)
    private readonly companyModalityRepository: Repository<CompanyModality>,

    @InjectRepository(CompanyContract)
    private readonly companyContractRepository: Repository<CompanyContract>,
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

  async companyModalitySeed() {
    await this.companyModalityRepository.delete({});
    const modalities = Object.values(companyModalities).map((modality) => {
      return this.companyModalityRepository.create(modality);
    });
    return this.companyModalityRepository.save(modalities);
  }

  async companyContractSeed() {
    await this.companyContractRepository.delete({});
    const contracts = Object.values(companyContracts).map((contract) => {
      return this.companyContractRepository.create(contract);
    });
    return this.companyContractRepository.save(contracts);
  }
}
