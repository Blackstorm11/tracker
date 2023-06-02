import { Module } from '@nestjs/common';
import { AttendanceLogService } from './attendance-log.service';
import { AttendanceLogController } from './attendance-log.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceLog } from './entities/attendance-log.entity';
import { FacultyMService } from 'src/faculty-m/faculty-m.service';
import { FacultyMModule } from 'src/faculty-m/faculty-m.module';




@Module({
  imports:[TypeOrmModule.forFeature([AttendanceLog]),FacultyMModule],
  controllers: [AttendanceLogController],
  providers: [AttendanceLogService],
  exports:[AttendanceLogService]
})
export class AttendanceLogModule {}
