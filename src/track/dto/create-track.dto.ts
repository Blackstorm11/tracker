import { TrackStatus } from "../entities/track.entity";
import { IsArray, IsInt, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTrackDto {
    // @ApiProperty()
    // @IsString()
    // login:string;

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
