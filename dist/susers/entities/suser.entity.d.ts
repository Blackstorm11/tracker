import { UserRoles } from "src/auth/user.roles";
import { Track } from "src/track/entities/track.entity";
export declare class Suser {
    _id: string;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    email: string;
    roles: UserRoles;
    updateTime: Date;
    track: Track;
}
