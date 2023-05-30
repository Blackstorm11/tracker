"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceLogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const attendance_dto_1 = require("./dto/attendance.dto");
const attendance_log_entity_1 = require("./entities/attendance-log.entity");
let AttendanceLogService = class AttendanceLogService {
    constructor(attendancelogRepository) {
        this.attendancelogRepository = attendancelogRepository;
    }
    async create(createAttendanceLogRequest) {
        if (typeof createAttendanceLogRequest.person === 'string' && createAttendanceLogRequest.person.includes("unknown")) {
            return null;
        }
        const attendanceLogs = await this.attendancelogRepository.find({
            order: {
                created_at: 'ASC'
            }
        });
        let attendanceLog = new attendance_log_entity_1.AttendanceLog();
        attendanceLog.person = createAttendanceLogRequest.person;
        attendanceLog.Status = createAttendanceLogRequest.Status;
        attendanceLog.created_at = createAttendanceLogRequest.created_at;
        await this.attendancelogRepository.save(attendanceLog);
        const attendanceDTO = new attendance_dto_1.AttendanceDTO();
        attendanceDTO._id = attendanceLog._id;
        attendanceDTO.Status = attendanceLog.Status;
        attendanceDTO.person = attendanceLog.person;
        attendanceDTO.created_at = attendanceLog.created_at;
        return attendanceDTO;
    }
    findAll() {
        return this.attendancelogRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} attendanceLog`;
    }
    update(id, updateAttendanceLogDto) {
        return `This action updates a #${id} attendanceLog`;
    }
    remove(id) {
        return `This action removes a #${id} attendanceLog`;
    }
};
AttendanceLogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(attendance_log_entity_1.AttendanceLog)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AttendanceLogService);
exports.AttendanceLogService = AttendanceLogService;
//# sourceMappingURL=attendance-log.service.js.map