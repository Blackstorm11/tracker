import { FacultyM } from 'src/faculty-m/entities/faculty-m.entity';
import { Repository } from 'typeorm';
import { AttendanceDTO } from './dto/attendance.dto';
import { CreateAttendanceLogDto } from './dto/create-attendance-log.dto';
import { UpdateAttendanceLogDto } from './dto/update-attendance-log.dto';
import { AttendanceLog } from './entities/attendance-log.entity';
export declare class AttendanceLogService {
    private attendancelogRepository;
    constructor(attendancelogRepository: Repository<AttendanceLog>);
    create(createAttendanceLogRequest: CreateAttendanceLogDto, facultyM: FacultyM): Promise<AttendanceDTO>;
    findAll(): Promise<AttendanceLog[]>;
    findOneById(id: string): Promise<AttendanceLog>;
    update(id: number, updateAttendanceLogDto: UpdateAttendanceLogDto): string;
    remove(id: number): string;
}
