import {
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateCompanyDto {
  
  @IsString()
  name: string;

  @IsString()
  description: string;
  
  @IsInt()
  @IsPositive()
  @IsNumber()
  industryId: number;

  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  logoUrl: string;

  @IsInt()
  @IsPositive()
  @IsNumber()
  cantEmployees: number;

  @IsString()
  justification: string;
}
