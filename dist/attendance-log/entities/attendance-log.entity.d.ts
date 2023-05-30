export declare class AttendanceLog {
    _id: string;
    person: string;
    Status: string;
    created_at: string;
    updateTime: Date;
    setUpdateTimestamp(): void;
    get formattedUpdateTime(): string;
}
