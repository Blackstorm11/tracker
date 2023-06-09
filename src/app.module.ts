import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TrackModule } from './track/track.module';
import { SusersModule } from './susers/suser.module';

import { AuthModule } from './auth/auth.module';
import {MailerModule} from '@nestjs-modules/mailer'
import { RegistrationModule } from './registration/registration.module';
import { AttendanceLogModule } from './attendance-log/attendance-log.module';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './auth/user.roles';
import { FacultyMModule } from './faculty-m/faculty-m.module';




@Module({
  imports: [TrackModule,SusersModule,AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal:true,
        envFilePath:".local.env",
        //envFilePath:".prod.env",
      }),
      MailerModule.forRoot({
        transport:{
          host:'smtp.gmail.com',
          port: 465, // Use port 465 for secure SSL/TLS connection
          secure: true,
          auth:{
            user:'omkarredkar907@gmail.com',
            pass:'epvsvpiusrepbv123rojfnv'
          }
        }
      })
        ],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
        synchronize:  configService.get<boolean>('DB_SYNC'),
        logging:true

      }),
      inject: [ConfigService],
    }),
    SusersModule,
    AccessControlModule.forRoles(roles),
    RegistrationModule,
    AttendanceLogModule,
    FacultyMModule,
  ],

})
export class AppModule { }
