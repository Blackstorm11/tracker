import { AttendanceLog } from "src/attendance-log/entities/attendance-log.entity";
export declare class FacultyM {
    id: string;
    Username: string;
    email: string;
    password: string;
    subject: string;
    attendanceLog: AttendanceLog[];
}
