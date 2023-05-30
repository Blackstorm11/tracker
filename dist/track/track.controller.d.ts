import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { Track } from './entities/track.entity';
export declare class TrackController {
    private readonly trackService;
    constructor(trackService: TrackService);
    create(createTrackRequeat: CreateTrackDto): Promise<void>;
    getUserImages(username: string): Promise<{
        label: string;
        image: string;
    }[]>;
    getAllRollNo(): Promise<string[]>;
    findAll(): Promise<import("./dto/track.dto").TrackDto[]>;
    findOne(email: string): Promise<Track>;
    find(trackid: string): Promise<Track>;
    updatePassword(email: string, newPassword: string): Promise<Track>;
    remove(trackid: string): Promise<Track>;
}
