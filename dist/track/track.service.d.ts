import { Repository } from 'typeorm';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackDto } from './dto/track.dto';
import { Track } from './entities/track.entity';
export declare class TrackService {
    private trackRepository;
    constructor(trackRepository: Repository<Track>);
    create(createTrackRequeat: CreateTrackDto): Promise<TrackDto>;
    findAll(): Promise<TrackDto[]>;
    findTrackById(id: string): Promise<Track>;
    findTrackByEmail(email: string): Promise<Track>;
    getOne(trackid: string): Promise<Track>;
    private entityToDto;
    removebyid(trackid: string): Promise<Track>;
}
