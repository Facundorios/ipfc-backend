import { IsOptional, IsString } from "class-validator";

export class CreateAssociationDto {

    @IsString()
    @IsOptional()
    status: string

}