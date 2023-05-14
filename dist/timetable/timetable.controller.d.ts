import { TimetableService } from './timetable.service';
import { CreateTimetableDto } from './dto/create-timetable.dto';
import { UpdateTimetableDto } from './dto/update-timetable.dto';
export declare class TimetableController {
    private readonly timetableService;
    constructor(timetableService: TimetableService);
    create(createTimetableDto: CreateTimetableDto): Promise<import("./dto/timetableDTO").TimetableDTO>;
    findAll(): Promise<import("./entities/timetable.entity").Timetable[]>;
    findOne(id: string): string;
    update(id: string, updateTimetableDto: UpdateTimetableDto): string;
    remove(id: string): string;
}
