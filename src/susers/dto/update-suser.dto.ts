import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';
import { CreateSuserDto } from './create-suser.dto';

export class UpdateSuserDto extends PartialType(CreateSuserDto) {
    @IsString()
    firstname:string;
    @IsString()
    lastname:string;

    @IsString()
    username:string;
    @IsString()
    password:string;
   
    @IsEmail()
    email:string;
    

    
}
