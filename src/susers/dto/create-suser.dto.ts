import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";


export class CreateSuserDto {
    
    @ApiProperty()
    @IsString()
    firstname:string;

    @ApiProperty()
    @IsString()
    lastname:string;

    @ApiProperty()
    @IsString()
    username:string;

    @ApiProperty()
    @IsString()
    password:string;
   
    @ApiProperty()
    @IsEmail()
    email:string;
    

}
