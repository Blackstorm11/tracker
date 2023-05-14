import { Module } from '@nestjs/common';
import { AttendanceLogService } from './attendance-log.service';
import { AttendanceLogController } from './attendance-log.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceLog } from './entities/attendance-log.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AttendanceLog]),],
  controllers: [AttendanceLogController],
  providers: [AttendanceLogService],
  exports:[AttendanceLogService]
})
export class AttendanceLogModule {}
