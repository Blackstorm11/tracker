import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttendanceLog } from '../attendance-log/entities/attendance-log.entity';
import { Repository } from 'typeorm';
import { CreateFacultyMDto } from './dto/create-faculty-m.dto';
import { UpdateFacultyMDto } from './dto/update-faculty-m.dto';
import { FacultyM } from './entities/faculty-m.entity';

@Injectable()
export class FacultyMService {

  constructor(@InjectRepository(FacultyM) private facultyMRepository:Repository<FacultyM>){}
 
 
 public async create(createFacultyMDto: CreateFacultyMDto) {
    let facultyM:FacultyM=new FacultyM()
    facultyM.Username=createFacultyMDto.Username;
    facultyM.email=createFacultyMDto.email;
    facultyM.password=createFacultyMDto.password;
    facultyM.subject=createFacultyMDto.subject;

    return await this.facultyMRepository.save(facultyM)
  }

  findAll() {
    return this.facultyMRepository.find();
  }

  async findFacultyById(id: string): Promise<FacultyM> {
    console.log('id:', id);
    
    return await this.facultyMRepository.findOne({
      where: { _id:id },
      relations: ['attendanceLog'],
      
    });
  }
  async getfacultyBySubject(subject:string):Promise<FacultyM>{
    return await this.facultyMRepository.findOne({
      where:{subject},
      relations: ['attendanceLog']
    })
  }
  async findFacultyByEmail(email:string):Promise<FacultyM>{
    return await this.facultyMRepository.findOne({where:{email}})
  }

  update(id: number, updateFacultyMDto: UpdateFacultyMDto) {
    return `This action updates a #${id} facultyM`;
  }

  remove(id: number) {
    return `This action removes a #${id} facultyM`;
  }
}
