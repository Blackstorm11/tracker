import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { RegistorDTO } from './dto/registorDTO';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { Registration } from './entities/registration.entity';

@Injectable()
export class RegistrationService {

  constructor(@InjectRepository(Registration) private registrationRepository: Repository<Registration>){}
  
  
  public async create(CreateRegistrationDto: CreateRegistrationDto) {
    let registor:Registration= new Registration();
    registor.name=CreateRegistrationDto.name;
    registor.rollNo=CreateRegistrationDto.rollNo;
    registor.UniversityNo=CreateRegistrationDto.UniversityNo;
    registor.email=CreateRegistrationDto.email;
    registor.password=CreateRegistrationDto.password;
    registor.images=CreateRegistrationDto.images;

    await this.registrationRepository.save(registor)

    const registorDTO=new RegistorDTO();
    registorDTO.UniversityNo=CreateRegistrationDto.UniversityNo;
    registorDTO.email=CreateRegistrationDto.email;
    registorDTO.name=CreateRegistrationDto.name;
    registorDTO.password=CreateRegistrationDto.password;
    registorDTO.rollNo=CreateRegistrationDto.rollNo;
    registorDTO.images=CreateRegistrationDto.images;
    return registorDTO;
  }

  findAll() {
    return this.registrationRepository.find;
  }

  findOne(id: number) {
    return `This action returns a #${id} registration`;
  }

  update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return `This action updates a #${id} registration`;
  }

  remove(id: number) {
    return `This action removes a #${id} registration`;
  }
}
