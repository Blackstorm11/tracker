"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceLogModule = void 0;
const common_1 = require("@nestjs/common");
const attendance_log_service_1 = require("./attendance-log.service");
const attendance_log_controller_1 = require("./attendance-log.controller");
const typeorm_1 = require("@nestjs/typeorm");
const attendance_log_entity_1 = require("./entities/attendance-log.entity");
let AttendanceLogModule = class AttendanceLogModule {
};
AttendanceLogModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([attendance_log_entity_1.AttendanceLog]),],
        controllers: [attendance_log_controller_1.AttendanceLogController],
        providers: [attendance_log_service_1.AttendanceLogService],
        exports: [attendance_log_service_1.AttendanceLogService]
    })
], AttendanceLogModule);
exports.AttendanceLogModule = AttendanceLogModule;
//# sourceMappingURL=attendance-log.module.js.map