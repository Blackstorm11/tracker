import { Repository } from 'typeorm';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { RegistorDTO } from './dto/registorDTO';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { Registration } from './entities/registration.entity';
export declare class RegistrationService {
    private registrationRepository;
    constructor(registrationRepository: Repository<Registration>);
    create(CreateRegistrationDto: CreateRegistrationDto): Promise<RegistorDTO>;
    findAll(): (options?: import("typeorm").FindManyOptions<Registration>) => Promise<Registration[]>;
    findOne(id: number): string;
    update(id: number, updateRegistrationDto: UpdateRegistrationDto): string;
    remove(id: number): string;
}
