import { Module } from '@nestjs/common';
import { SusersService } from './suser.service';
import { SusersController } from './suser.controller';
import { TrackModule } from 'src/track/track.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suser } from './entities/suser.entity';
import { AccessControlModule } from 'nest-access-control';
import { roles } from 'src/auth/user.roles';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[AccessControlModule.forRoles(roles),TrackModule, TypeOrmModule.forFeature([Suser]),PassportModule],
  controllers: [SusersController],
  providers: [SusersService],
  exports:[SusersService]
})
export class SusersModule {}
