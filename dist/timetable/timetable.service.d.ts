import { Repository } from 'typeorm';
import { CreateTimetableDto } from './dto/create-timetable.dto';
import { TimetableDTO } from './dto/timetableDTO';
import { UpdateTimetableDto } from './dto/update-timetable.dto';
import { Timetable } from './entities/timetable.entity';
export declare class TimetableService {
    private timetableRepository;
    constructor(timetableRepository: Repository<Timetable>);
    create(CreateTimetableRequest: CreateTimetableDto): Promise<TimetableDTO>;
    findAll(): Promise<Timetable[]>;
    findOne(id: number): string;
    update(id: number, updateTimetableDto: UpdateTimetableDto): string;
    remove(id: number): string;
}
