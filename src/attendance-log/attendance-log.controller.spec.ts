import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceLogController } from './attendance-log.controller';
import { AttendanceLogService } from './attendance-log.service';

describe('AttendanceLogController', () => {
  let controller: AttendanceLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttendanceLogController],
      providers: [AttendanceLogService],
    }).compile();

    controller = module.get<AttendanceLogController>(AttendanceLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
