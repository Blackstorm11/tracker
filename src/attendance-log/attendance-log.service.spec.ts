import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceLogService } from './attendance-log.service';

describe('AttendanceLogService', () => {
  let service: AttendanceLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttendanceLogService],
    }).compile();

    service = module.get<AttendanceLogService>(AttendanceLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
