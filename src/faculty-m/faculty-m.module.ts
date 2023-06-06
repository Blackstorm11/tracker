import { Module } from '@nestjs/common';
import { FacultyMService } from './faculty-m.service';
import { FacultyMController } from './faculty-m.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultyM } from './entities/faculty-m.entity';

import { AccessControlModule } from 'nest-access-control';
import { roles } from 'src/auth/user.roles';
import { PassportModule } from '@nestjs/passport';



@Module({
  imports:[TypeOrmModule.forFeature([FacultyM] ),AccessControlModule.forRoles(roles),PassportModule],
  controllers: [FacultyMController],
  providers: [FacultyMService],
  exports:[FacultyMService]
})
export class FacultyMModule {}
