import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttendanceDTO } from './dto/attendance.dto';
import { CreateAttendanceLogDto } from './dto/create-attendance-log.dto';
import { UpdateAttendanceLogDto } from './dto/update-attendance-log.dto';
import { AttendanceLog } from './entities/attendance-log.entity';

@Injectable()
export class AttendanceLogService {

  constructor (@InjectRepository(AttendanceLog) private attendancelogRepository:Repository<AttendanceLog>){}

 
  // public async create(createAttendanceLogRequest: CreateAttendanceLogDto) {
  //   let attendanceLog:AttendanceLog= new AttendanceLog()
  //   attendanceLog.person = JSON.parse(createAttendanceLogRequest.person); // parse recognizedPersons array from string
  //   attendanceLog.Status=createAttendanceLogRequest.Status;

  //   await this.attendancelogRepository.save(attendanceLog);

  //   const attendanceDTO=new AttendanceDTO();
  //   attendanceDTO._id=attendanceLog._id;
  //   attendanceDTO.Status=attendanceLog.Status;
  //   attendanceDTO.person=attendanceLog.person
  //   return attendanceDTO;
  // }
  public async create(createAttendanceLogRequest: CreateAttendanceLogDto) {
    if (typeof createAttendanceLogRequest.person === 'string' && createAttendanceLogRequest.person.includes("unknown")) {
      // Don't save if person contains "unknown"
      return null;
    }
    const attendanceLogs = await this.attendancelogRepository.find({
      order: {
        created_at: 'ASC' // or 'DESC' for descending order
      }
    });
    
    let attendanceLog:AttendanceLog= new AttendanceLog()
    attendanceLog.person = createAttendanceLogRequest.person;
    attendanceLog.Status=createAttendanceLogRequest.Status;
    attendanceLog.created_at=createAttendanceLogRequest.created_at;
  
    await this.attendancelogRepository.save(attendanceLog);
  
    const attendanceDTO=new AttendanceDTO();
    attendanceDTO._id=attendanceLog._id;
    attendanceDTO.Status=attendanceLog.Status;
    attendanceDTO.person=attendanceLog.person;
    attendanceDTO.created_at=attendanceLog.created_at;
    return attendanceDTO;
  }
  


  findAll() {
    return this.attendancelogRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} attendanceLog`;
  }

  update(id: number, updateAttendanceLogDto: UpdateAttendanceLogDto) {
    return `This action updates a #${id} attendanceLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendanceLog`;
  }

}
