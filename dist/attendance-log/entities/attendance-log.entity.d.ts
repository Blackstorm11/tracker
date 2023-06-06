import { FacultyM } from "src/faculty-m/entities/faculty-m.entity";
export declare class AttendanceLog {
    _id: string;
    person: string;
    Status: string;
    subject: string;
    created_at: string;
    updateTime: Date;
    setUpdateTimestamp(): void;
    get formattedUpdateTime(): string;
    facultyM: FacultyM[];
}
