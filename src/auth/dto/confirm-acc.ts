import { IsString } from 'class-validator';

export class ConfirmAccountDto {
  @IsString()
  code: string;
}
