import { Strategy } from "passport-local";
import { Suser } from "src/susers/entities/suser.entity";
import { Track } from "src/track/entities/track.entity";
import { SusersService } from "src/susers/suser.service";
import { TrackService } from "src/track/track.service";
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private suserService;
    private userService;
    constructor(suserService: SusersService, userService: TrackService);
    validate(email: string, password: string): Promise<Suser | Track>;
}
export {};
