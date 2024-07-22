import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';


import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm';


import { CreateUserDto } from './dto/create-user.dto';
import { Role } from './entities/userRole.entity';
import { User } from './entities/user.entity';
import { ValidRoles } from './interfaces/valid-roles.interfaces';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  deleteAllRoles() {
    return this.roleRepository.delete({});
  }

  async runRoleSeed() {
    await this.deleteAllRoles();
    const roles = Object.values(ValidRoles).map((role) => ({ role }));
    await this.roleRepository.insert(roles);
    return roles;
  }

  async createUser(createUserDto: CreateUserDto) {
    try {
     
      const {  password, ...rest } = createUserDto

      const user = this.userRepository.create({
        ...rest,
        password: await bcrypt.hash(password, 15)
      })

      return this.userRepository.save(user);
    } catch (error) {
      console.log(error);
    }
  }
}
