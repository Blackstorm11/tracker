import { Suser } from "src/susers/entities/suser.entity";
import { BaseEntity } from "typeorm";
export declare enum TrackStatus {
    Created = 0,
    InProgress = 1,
    Done = 3
}
export declare class Track extends BaseEntity {
    _id: string;
    name: string;
    rollNo: string;
    semester: number;
    UniversityNo: string;
    email: string;
    password: string;
    images: string[];
    suser: Suser[];
    updateTime: Date;
}
