import { PartialType } from '@nestjs/swagger';
import { CreateFacultyMDto } from './create-faculty-m.dto';

export class UpdateFacultyMDto extends PartialType(CreateFacultyMDto) {}
