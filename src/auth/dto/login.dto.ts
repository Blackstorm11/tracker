import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class LoginDto {
  @ApiProperty()
    
    @ApiProperty()
    @IsNotEmpty()
    email: string;
  
    @ApiProperty()
    @IsNotEmpty()
    password: string;
  }