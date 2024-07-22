import { IsEmail, IsString, MaxLength, MinLength } from "class-validator"

export class LoginDto {

    @IsEmail()
    @IsString()
    email: string

    @IsString()
    @MinLength(8)
    @MaxLength(35)
    password: string
}