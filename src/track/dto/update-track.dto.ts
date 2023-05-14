import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsString } from 'class-validator';
import { TrackStatus } from '../entities/track.entity';
import { CreateTrackDto } from './create-track.dto';

export class UpdateTrackDto extends PartialType(CreateTrackDto) {
    
    @IsString()
    login:string;
    @IsString()
    name:string;
    @IsString()
    email:string;
    @IsInt()
    repository:number;

    status:TrackStatus;
    @IsInt()
    public_repos:number;
    @IsInt()
    public_gists:number;


}
