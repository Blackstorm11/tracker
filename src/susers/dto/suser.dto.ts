import { IsEmail, IsInt, IsString } from "class-validator";


export class SuserDTO {
    @IsInt()
    _id:string;

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
