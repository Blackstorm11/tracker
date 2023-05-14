import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsInt, IsString } from "class-validator";
import { TrackStatus } from "../entities/track.entity";

export class TrackDto{
    @IsString()
    _id:string
    @ApiProperty()
    @IsString()
    name:string;

    @ApiProperty()
    @IsString()
    email:string;

    @ApiProperty()
    @IsString()
    rollNo:string;

    @ApiProperty()
    UniversityNo:string;

    @ApiProperty()
    @IsInt()
    semester:number;

    @ApiProperty()
    @IsString()
    password:string;

    @ApiProperty()
    @IsArray()
    images:string[]

}