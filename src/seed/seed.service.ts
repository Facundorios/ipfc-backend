import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/auth/entities/userRole.entity';
import { ValidRoles } from 'src/auth/interfaces/valid-roles.interface';
import { Repository } from 'typeorm';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async roleSeed() {
    await this.roleRepository.delete({});
    const roles = Object.values(ValidRoles).map((role) => ({ role }));
    await this.roleRepository.insert(roles);
    return roles;
  }
}
