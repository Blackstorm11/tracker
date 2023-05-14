import { HistoryActionType } from "@anchan828/typeorm-history";
import { Suser } from "src/susers/entities/suser.entity";
import { HistoryEntityInterface } from "typeorm-revisions";
import { Track } from "../track/entities/track.entity";
export declare class TrackHistory extends Track implements HistoryEntityInterface {
    updateTime: Date;
    makeActionAt: Date;
    _id: string;
    originalID: string;
    action: HistoryActionType;
}
export declare class SuserHistory extends Suser implements HistoryEntityInterface {
    updateTime: Date;
    makeActionAt: Date;
    _id: string;
    originalID: string;
    action: HistoryActionType;
}
