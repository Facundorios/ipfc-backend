import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateAssociationDto } from './dto/create-association.dto.js';
import { Association } from './entities/association.entity';
import { Company } from 'src/company/entities/company.entity';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class AssociationsService {
  constructor(
    @InjectRepository(Association)
    private readonly associationRepository: Repository<Association>,

    @InjectRepository(Company)
    private readonly companyReposity: Repository<Company>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createAssociation(
    createAssociationDto: CreateAssociationDto,
    companyId: string,
    userId: string,
  ) {
    const company = await this.companyReposity.findOneBy({ id: companyId });
    if (!company) throw new NotFoundException(`Company not found`);

    const user = await this.userRepository.findOneBy({  id: userId });
    if (!user) throw new NotFoundException(`User not found`);

    const association = this.associationRepository.create(createAssociationDto);
    association.company = company;
    association.user = user;

    try {
      await this.associationRepository.save(association);
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`${error}`);
    }
    return association
  }

  async setAssociationsStatus(id: string, status: string) {
    try {
      const association = await this.associationRepository.findOneBy({ id });
      if (!association) throw new NotFoundException(`La asociación no existe`);
      await this.associationRepository.update(id, { status });
      return "La asociación ya ha sido actualizada";
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`${error}`);
    }
  }
}
