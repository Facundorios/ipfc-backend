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
  
  @IsPositive()
  @IsInt()
  @IsNumber()
  industryId: number;

  @IsPositive()
  @IsInt()
  @IsNumber()
  contractId: number

}
