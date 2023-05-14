import { AttendanceLogService } from './attendance-log.service';
import { CreateAttendanceLogDto } from './dto/create-attendance-log.dto';
import { UpdateAttendanceLogDto } from './dto/update-attendance-log.dto';
export declare class AttendanceLogController {
    readonly attendanceLogService: AttendanceLogService;
    constructor(attendanceLogService: AttendanceLogService);
    create(createAttendanceLogRequest: CreateAttendanceLogDto): Promise<import("./dto/attendance.dto").AttendanceDTO>;
    findAll(): Promise<import("./entities/attendance-log.entity").AttendanceLog[]>;
    findOne(id: string): Promise<string>;
    update(id: string, updateAttendanceLogDto: UpdateAttendanceLogDto): Promise<string>;
    remove(id: string): Promise<string>;
}
