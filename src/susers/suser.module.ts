import { Module } from '@nestjs/common';
import { SusersService } from './suser.service';
import { SusersController } from './suser.controller';
import { TrackModule } from 'src/track/track.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suser } from './entities/suser.entity';

@Module({
  imports:[TrackModule, TypeOrmModule.forFeature([Suser])],
  controllers: [SusersController],
  providers: [SusersService],
  exports:[SusersService]
})
export class SusersModule {}
