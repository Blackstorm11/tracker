import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import {  ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AttendanceLogService } from './attendance-log.service';
import { CreateAttendanceLogDto } from './dto/create-attendance-log.dto';
import { UpdateAttendanceLogDto } from './dto/update-attendance-log.dto';

@Controller('attendanceLog')
@ApiTags("attendance_log")
@ApiSecurity("JWT-auth")
export class AttendanceLogController {
  constructor(public readonly attendanceLogService: AttendanceLogService) {}

  @Post('/logs')
  public async create(@Body(new ValidationPipe()) createAttendanceLogRequest: CreateAttendanceLogDto) {
    // createAttendanceLogRequest.person = JSON.stringify(createAttendanceLogRequest.person); // stringify recognizedPersons array
    const resp= await this.attendanceLogService.create(createAttendanceLogRequest);
    return resp;
  }
  

  @Get()
  public async findAll() {
    const resp = await this.attendanceLogService.findAll();
    return resp;
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    const resp = await this.attendanceLogService.findOne(+id);
    return resp;
  }

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
