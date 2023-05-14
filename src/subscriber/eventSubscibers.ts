

import { SuserHistory, TrackHistory } from "src/history/history.entity";
import { Suser } from "src/susers/entities/suser.entity";
import { Track } from "src/track/entities/track.entity";
import {  EventSubscriber } from "typeorm";
import { HistorySubscriber } from "typeorm-revisions";



@EventSubscriber()
export class TrackHistorySubscriber extends HistorySubscriber<Track,TrackHistory>{
    public get entity(){
        return Track;
    }
    public get historyEntity() {
        return TrackHistory;
    }
}

@EventSubscriber()
export class SuserHistorySubscriber extends HistorySubscriber<Suser,SuserHistory>{
    public get entity(){
        return Suser;

    }
    public get historyEntity(){
        return SuserHistory;
    }
}