import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { CreateUserDto, LoginDto } from './dto';
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

  async createUser(createUserDto: CreateUserDto) {
    try {
      const roleNameAsString: string = createUserDto.roleName; // Este valor vendría del DTO
      const roleValue: ValidRoles = ValidRoles[roleNameAsString];
      if (!roleValue) throw new Error('Invalid role name');

      const { password, roleName, ...rest } = createUserDto;
      const role = await this.roleRepository.findOne({
        where: {
          role: roleValue,
        },
      });
      if (!role) throw new Error('Role not found');

      const user = this.userRepository.create({
        ...rest,
        password: await bcrypt.hash(password, 15),
        role: role,
      });

      await this.userRepository.save(user);

      return {
        ...user,
        token: this.generateToken({ id: user.id }),
      };
    } catch (error) {
      console.log(error);
    }
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.userRepository.findOne({
      where: { email: email },
    });
    if (!user)
      throw new NotFoundException(
        `User with email: ${email} doesn't exist on db.`,
      );

    if (!bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException('Incorrect Password');
    }
    return { token: this.generateToken({ id: user.id }) };
  }

  private generateToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
