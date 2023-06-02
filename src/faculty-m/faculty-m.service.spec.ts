import { Test, TestingModule } from '@nestjs/testing';
import { FacultyMService } from './faculty-m.service';

describe('FacultyMService', () => {
  let service: FacultyMService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacultyMService],
    }).compile();

    service = module.get<FacultyMService>(FacultyMService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
