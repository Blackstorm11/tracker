import { TrackService } from 'src/track/track.service';
import { Repository } from 'typeorm';
import { CreateSuserDto } from './dto/create-suser.dto';
import { SuserDTO } from './dto/suser.dto';
import { UpdateSuserDto } from './dto/update-suser.dto';
import { Suser } from './entities/suser.entity';
export declare class SusersService {
    private suserRepository;
    private trackService;
    constructor(suserRepository: Repository<Suser>, trackService: TrackService);
    create(createSuserDto: CreateSuserDto, track_id: string): Promise<SuserDTO>;
    findAll(): Promise<Suser[]>;
    findSuserByEmail(email: string): Promise<Suser>;
    findSuserById(id: string): Promise<Suser>;
    update(id: number, updateSuserDto: UpdateSuserDto): string;
    remove(id: number): string;
}
