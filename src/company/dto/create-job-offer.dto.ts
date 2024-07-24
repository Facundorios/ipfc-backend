import { IsString, IsUUID } from "class-validator";


export class JobOfferDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}