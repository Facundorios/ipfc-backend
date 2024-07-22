import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ValidRoles } from '../interfaces/valid-roles.interfaces';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(35)
  password: string;

  @IsString()
  about: string;


  @IsString()
  role: ValidRoles 
}
