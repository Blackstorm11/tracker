"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const track_module_1 = require("./track/track.module");
const suser_module_1 = require("./susers/suser.module");
const auth_module_1 = require("./auth/auth.module");
const mailer_1 = require("@nestjs-modules/mailer");
const registration_module_1 = require("./registration/registration.module");
const attendance_log_module_1 = require("./attendance-log/attendance-log.module");
const nest_access_control_1 = require("nest-access-control");
const user_roles_1 = require("./auth/user.roles");
const faculty_m_module_1 = require("./faculty-m/faculty-m.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [track_module_1.TrackModule, suser_module_1.SusersModule, auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule.forRoot({
                        isGlobal: true,
                        envFilePath: ".local.env",
                    }),
                    mailer_1.MailerModule.forRoot({
                        transport: {
                            host: 'smtp.gmail.com',
                            port: 465,
                            secure: true,
                            auth: {
                                user: 'omkarredkar907@gmail.com',
                                pass: 'epvsvpiusrepbv123rojfnv'
                            }
                        }
                    })
                ],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: +configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                    entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
                    synchronize: configService.get('DB_SYNC'),
                    logging: true
                }),
                inject: [config_1.ConfigService],
            }),
            suser_module_1.SusersModule,
            nest_access_control_1.AccessControlModule.forRoles(user_roles_1.roles),
            registration_module_1.RegistrationModule,
            attendance_log_module_1.AttendanceLogModule,
            faculty_m_module_1.FacultyMModule,],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map