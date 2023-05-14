import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { SusersModule } from 'src/susers/suser.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategy/jwt.strategy';
import { TrackModule } from 'src/track/track.module';

@Module({
  imports:[SusersModule,PassportModule,TrackModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_KEY'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRE') + 's',//60
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [LocalStrategy,JwtStrategy]
})
export class AuthModule {}
