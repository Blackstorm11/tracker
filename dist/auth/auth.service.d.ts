import { FacultyMService } from 'src/faculty-m/faculty-m.service';
import { SusersService } from 'src/susers/suser.service';
import { TrackService } from 'src/track/track.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
export declare class AuthService {
    private suserService;
    private userService;
    private facultyService;
    private readonly jwtSecret;
    constructor(suserService: SusersService, userService: TrackService, facultyService: FacultyMService);
    sendPasswordResetEmail(email: string): Promise<void>;
    create(createAuthDto: CreateAuthDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}
