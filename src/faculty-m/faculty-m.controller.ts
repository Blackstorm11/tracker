import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { FacultyMService } from './faculty-m.service';
import { CreateFacultyMDto } from './dto/create-faculty-m.dto';
import { UpdateFacultyMDto } from './dto/update-faculty-m.dto';
import { FacultyM } from './entities/faculty-m.entity';
import { ApiTags } from '@nestjs/swagger';
import { Subject } from 'rxjs';

@ApiTags()
@Controller('faculty-m')
export class FacultyMController {
  constructor(private readonly facultyMService: FacultyMService) {}

  @Post()
  create(@Body() createFacultyMDto: CreateFacultyMDto) {
    return this.facultyMService.create(createFacultyMDto);
  }

  @Get()
  findAll() {
    return this.facultyMService.findAll();
  }

  @Get(':id')
    async findOne(@Param('id') id:string):Promise<FacultyM>{
      return await this.facultyMService.findFacultyById(id)
    }
  @Get('get/:subject')
    async findfacultyM(@Param('subject') subject:string){
      return await this.facultyMService.getfacultyBySubject(subject)
    }
  @Get('email/:email')
    async findFacultyBYemail(@Param('email') email:string){
      return await this.facultyMService.findFacultyByEmail(email)
    }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacultyMDto: UpdateFacultyMDto) {
    return this.facultyMService.update(+id, updateFacultyMDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facultyMService.remove(+id);
  }
}
