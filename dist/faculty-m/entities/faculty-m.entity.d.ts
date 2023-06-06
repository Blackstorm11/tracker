import { UserRoles } from "src/auth/user.roles";
import { AttendanceLog } from "src/attendance-log/entities/attendance-log.entity";
export declare class FacultyM {
    _id: string;
    Username: string;
    email: string;
    password: string;
    subject: string;
    roles: UserRoles;
    attendanceLog: AttendanceLog[];
}
