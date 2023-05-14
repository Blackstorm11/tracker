import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
export declare class TrackController {
    private readonly trackService;
    constructor(trackService: TrackService);
    create(createTrackRequeat: CreateTrackDto): Promise<void>;
    findAll(): Promise<import("./dto/track.dto").TrackDto[]>;
    findOne(email: string): Promise<import("./entities/track.entity").Track>;
    find(trackid: string): Promise<import("./entities/track.entity").Track>;
    remove(trackid: string): Promise<import("./entities/track.entity").Track>;
}
