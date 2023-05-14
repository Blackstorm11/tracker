import { HistoryActionColumn, HistoryActionType,  HistoryOriginalIdColumn } from "@anchan828/typeorm-history";
import { Suser } from "src/susers/entities/suser.entity";
import { BaseEntity, Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";
import { HistoryEntityInterface } from "typeorm-revisions";
import { Track, TrackStatus } from "../track/entities/track.entity";


@Entity()
export class TrackHistory extends Track implements HistoryEntityInterface{
   
    updateTime: Date;
    makeActionAt:Date;
    @PrimaryGeneratedColumn("uuid")
    _id: string 
    @Column()
    public originalID!: string;

    @HistoryActionColumn()
    public action!: HistoryActionType;

}


@Entity()
export class SuserHistory extends Suser implements HistoryEntityInterface{
    updateTime: Date;
    makeActionAt:Date;
    @PrimaryGeneratedColumn('uuid')
    _id: string;


    @HistoryOriginalIdColumn()
    public originalID: string;

    @HistoryActionColumn()
    public action: HistoryActionType;
}
function GeneratedColumn() {
    throw new Error("Function not implemented.");
}

