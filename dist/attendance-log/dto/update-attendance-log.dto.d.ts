import { CreateAttendanceLogDto } from './create-attendance-log.dto';
declare const UpdateAttendanceLogDto_base: import("@nestjs/common").Type<Partial<CreateAttendanceLogDto>>;
export declare class UpdateAttendanceLogDto extends UpdateAttendanceLogDto_base {
    _id: string;
    person: string;
    Status: string;
    updateTime: Date;
}
export {};
