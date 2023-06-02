import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import {  ApiSecurity, ApiTags } from '@nestjs/swagger';
import { FacultyMService } from 'src/faculty-m/faculty-m.service';
import { AttendanceLogService } from './attendance-log.service';
import { CreateAttendanceLogDto } from './dto/create-attendance-log.dto';
import { UpdateAttendanceLogDto } from './dto/update-attendance-log.dto';
import { AttendanceLog } from './entities/attendance-log.entity';

@Controller('attendanceLog')
@ApiTags("attendance_log")
@ApiSecurity("JWT-auth")
export class AttendanceLogController {
  constructor(private attendanceLogService: AttendanceLogService,private facultyMService:FacultyMService) {}

  @Post('/logs')
  public async create(@Body(new ValidationPipe()) attendanceLog: CreateAttendanceLogDto) {
    // createAttendanceLogRequest.person = JSON.stringify(createAttendanceLogRequest.person); // stringify recognizedPersons array
    console.log('facultyMId:', attendanceLog.facultyMId);

    const facultyM=await this.facultyMService.findFacultyById(attendanceLog.facultyMId)

    const resp= await this.attendanceLogService.create(attendanceLog,facultyM);
    return resp;
  }
  // @Post("")
  // @UsePipes(ValidationPipe)
  // async saveAttendancelog(@Body() attendanceLog:CreateAttendanceLogDto):Promise<AttendanceLog>{
  //   const facultyM=await this.facultyMService.findFacultyById(attendanceLog.facultyMId)
  //   return await this.attendanceLogService.createAttendanceLog(attendanceLog,facultyM);
  // }

  @Get()
  public async findAll() {
    const resp = await this.attendanceLogService.findAll();
    return resp;
  }

  // @Get(':id')
  // public async findOne(@Param('id') id: string) {
  //   const resp = await this.attendanceLogService.findOne(+id);
  //   return resp;
  // }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateAttendanceLogDto: UpdateAttendanceLogDto) {
    const resp = await this.attendanceLogService.update(+id, updateAttendanceLogDto);
    return resp;
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    const resp = await this.attendanceLogService.remove(+id);
    return resp;
  }
}
