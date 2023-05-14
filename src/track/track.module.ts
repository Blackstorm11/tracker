import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SusersModule } from 'src/susers/suser.module';
import { Track } from './entities/track.entity';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';

@Module({
  imports: [TypeOrmModule.forFeature([Track] ),],
  controllers: [TrackController],
  providers: [TrackService],
  exports:[TrackService]
})
export class TrackModule {}
