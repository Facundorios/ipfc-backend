import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAssociationDto } from './dto/create-association.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Association } from './entities/association.entity';
import { Repository } from 'typeorm';
import { Company } from 'src/company/entities/company.entity';

@Injectable()
export class AssociationsService {
  constructor(
    @InjectRepository(Association)
    private readonly associationRepository: Repository<Association>,

    @InjectRepository(Company)
    private readonly companyReposity: Repository<Company>,
  ) {}

  async createAssociation(
    createAssociationDto: CreateAssociationDto,
    id: string,
  ) {
    const company = await this.companyReposity.findOneBy({ id });
    if (!company)
      throw new NotFoundException(`Company with ID ${id} not found`);
    const association = this.associationRepository.create(createAssociationDto);
    association.company = company;
    await this.associationRepository.save(association);
    return association;
  }

  async setAssociationsStatus(id: string, status: string) {
    try {
      const association = await this.associationRepository.findOneBy({ id });
      if (!association) throw new NotFoundException(`La asociación no existe`);
      await this.associationRepository.update(id, { status });
      return association;
    } catch (error) {
      throw new BadRequestException(`${error}`);
    }
  }
}
