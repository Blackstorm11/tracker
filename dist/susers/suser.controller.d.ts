import { SusersService } from './suser.service';
import { CreateSuserDto } from './dto/create-suser.dto';
import { UpdateSuserDto } from './dto/update-suser.dto';
import { Suser } from './entities/suser.entity';
export declare class SusersController {
    private readonly susersService;
    constructor(susersService: SusersService);
    create(createSuserDto: CreateSuserDto, trackid: string): Promise<import("./dto/suser.dto").SuserDTO>;
    findAll(): Promise<Suser[]>;
    findOne(email: string): Promise<Suser>;
    findById(id: string): Promise<Suser>;
    update(id: string, updateSuserDto: UpdateSuserDto): string;
    remove(id: string): string;
}
