import { IsEmail, IsIn, IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
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
  @IsIn(['student', 'inversor', 'recruiter', 'admin', 'superAdmin'])
  roleName: string;
}
