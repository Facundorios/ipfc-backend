import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { RegisterDto, LoginDto } from './dto';
import { Role, User } from './entities';
import { JwtPayload, ValidRoles } from './interfaces';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly jwtService: JwtService,
  ) {}

  async createUser(registerDto: RegisterDto) {
    try {
      const roleNameAsString: string = registerDto.roleName; // Este valor vendría del DTO
      const roleValue: ValidRoles = ValidRoles[roleNameAsString];
      if (!roleValue) throw new Error('Invalid role name');

      const { password, roleName, ...rest } = registerDto;

      const role = await this.roleRepository.findOne({
        where: { role: roleValue },
      });
      if (!role) throw new Error('Role not found');

      const user = this.userRepository.create({
        ...rest,
        password: await bcrypt.hash(password, 15),
        role: role,
      });

      await this.userRepository.save(user);
      return { token: this.generateToken({ id: user.id, role: roleValue }) };
    } catch (error) {
      if (error.code === '23505') {
        throw new UnauthorizedException('User already exists');
      }
    }
  }

  async loginUser(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.userRepository.findOne({
      where: { email: email },
      relations: ['role'],
    });
    if (!user) throw new NotFoundException(`User not found with: ${email}.`);

    if (!bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException('Incorrect Password');
    }
    return { token: this.generateToken({ id: user.id, role: user.role.role }) };
  }

  async getUsers() {
    const users = await this.userRepository.find();
    return users;
  }

  private generateToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
