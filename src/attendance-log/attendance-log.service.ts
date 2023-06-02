import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FacultyM } from 'src/faculty-m/entities/faculty-m.entity';
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
  public async create(createAttendanceLogRequest: CreateAttendanceLogDto,facultyM:FacultyM) {
    if (typeof createAttendanceLogRequest.person === 'string' && createAttendanceLogRequest.person.includes("unknown")) {
      // Don't save if person contains "unknown"
      return null;
    }
    const attendanceLogs = await this.attendancelogRepository.find({
      order: {
        created_at: 'ASC' // or 'DESC' for descending order
      }
    });
    // Retrieve the faculty based on facultyMId
  // const facultyM = await this.facultyMRepository.findOne(facultyMId);

  if (!facultyM) {
    // Handle case when facultyMId is invalid or not found
    throw new NotFoundException('Faculty not found');
  }
  console.log('facultyM:', facultyM);

    let attendanceLog:AttendanceLog= new AttendanceLog()
    attendanceLog.person = createAttendanceLogRequest.person;
    attendanceLog.Status=createAttendanceLogRequest.Status;
    attendanceLog.created_at=createAttendanceLogRequest.created_at;
    attendanceLog.subject=createAttendanceLogRequest.subject;
    attendanceLog.facultyMId=createAttendanceLogRequest.facultyMId
    // facultyM.attendanceLog=[...facultyM.attendanceLog,attendanceLog]
    facultyM.attendanceLog.push(attendanceLog); // Use push to add the attendance log to the faculty member's array


    await this.attendancelogRepository.save(attendanceLog);
  
    const attendanceDTO=new AttendanceDTO();
    attendanceDTO._id=attendanceLog._id;
    attendanceDTO.Status=attendanceLog.Status;
    attendanceDTO.person=attendanceLog.person;
    attendanceDTO.created_at=attendanceLog.created_at;
    attendanceDTO.facultyMId=attendanceLog.facultyMId;
    return attendanceDTO;
  }
  


  findAll() {
    return this.attendancelogRepository.find();
  }

  async findOneById(id: string):Promise<AttendanceLog>{
    return await this.attendancelogRepository.findOne({where:{_id:id}})
  }

  update(id: number, updateAttendanceLogDto: UpdateAttendanceLogDto) {
    return `This action updates a #${id} attendanceLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendanceLog`;
  }

}
