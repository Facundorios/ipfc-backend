import { IsString } from "class-validator";


export class JobOfferDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}