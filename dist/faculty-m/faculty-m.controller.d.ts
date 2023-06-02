import { FacultyMService } from './faculty-m.service';
import { CreateFacultyMDto } from './dto/create-faculty-m.dto';
import { UpdateFacultyMDto } from './dto/update-faculty-m.dto';
import { FacultyM } from './entities/faculty-m.entity';
export declare class FacultyMController {
    private readonly facultyMService;
    constructor(facultyMService: FacultyMService);
    create(createFacultyMDto: CreateFacultyMDto): Promise<FacultyM>;
    findAll(): Promise<FacultyM[]>;
    findOne(id: string): Promise<FacultyM>;
    findfacultyM(subject: string): Promise<FacultyM>;
    update(id: string, updateFacultyMDto: UpdateFacultyMDto): string;
    remove(id: string): string;
}
