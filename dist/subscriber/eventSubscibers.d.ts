import { SuserHistory, TrackHistory } from "src/history/history.entity";
import { Suser } from "src/susers/entities/suser.entity";
import { Track } from "src/track/entities/track.entity";
import { HistorySubscriber } from "typeorm-revisions";
export declare class TrackHistorySubscriber extends HistorySubscriber<Track, TrackHistory> {
    get entity(): typeof Track;
    get historyEntity(): typeof TrackHistory;
}
export declare class SuserHistorySubscriber extends HistorySubscriber<Suser, SuserHistory> {
    get entity(): typeof Suser;
    get historyEntity(): typeof SuserHistory;
}
