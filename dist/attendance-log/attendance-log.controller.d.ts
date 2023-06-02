import { FacultyMService } from 'src/faculty-m/faculty-m.service';
import { AttendanceLogService } from './attendance-log.service';
import { CreateAttendanceLogDto } from './dto/create-attendance-log.dto';
import { UpdateAttendanceLogDto } from './dto/update-attendance-log.dto';
import { AttendanceLog } from './entities/attendance-log.entity';
export declare class AttendanceLogController {
    private attendanceLogService;
    private facultyMService;
    constructor(attendanceLogService: AttendanceLogService, facultyMService: FacultyMService);
    create(attendanceLog: CreateAttendanceLogDto): Promise<import("./dto/attendance.dto").AttendanceDTO>;
    findAll(): Promise<AttendanceLog[]>;
    update(id: string, updateAttendanceLogDto: UpdateAttendanceLogDto): Promise<string>;
    remove(id: string): Promise<string>;
}
