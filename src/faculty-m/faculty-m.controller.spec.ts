import { Test, TestingModule } from '@nestjs/testing';
import { FacultyMController } from './faculty-m.controller';
import { FacultyMService } from './faculty-m.service';

describe('FacultyMController', () => {
  let controller: FacultyMController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacultyMController],
      providers: [FacultyMService],
    }).compile();

    controller = module.get<FacultyMController>(FacultyMController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
