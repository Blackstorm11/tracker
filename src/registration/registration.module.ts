import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';
import { Registration } from './entities/registration.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[ TypeOrmModule.forFeature([Registration])],
  controllers: [RegistrationController],
  providers: [RegistrationService],
  exports: [RegistrationService]
})
export class RegistrationModule {}
