import { Repository } from 'typeorm';
import { CreateFacultyMDto } from './dto/create-faculty-m.dto';
import { UpdateFacultyMDto } from './dto/update-faculty-m.dto';
import { FacultyM } from './entities/faculty-m.entity';
export declare class FacultyMService {
    private facultyMRepository;
    constructor(facultyMRepository: Repository<FacultyM>);
    create(createFacultyMDto: CreateFacultyMDto): Promise<FacultyM>;
    findAll(): Promise<FacultyM[]>;
    findFacultyById(id: string): Promise<FacultyM>;
    getfacultyBySubject(subject: string): Promise<FacultyM>;
    findFacultyByEmail(email: string): Promise<FacultyM>;
    update(id: number, updateFacultyMDto: UpdateFacultyMDto): string;
    remove(id: number): string;
}
