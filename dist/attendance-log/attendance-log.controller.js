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
exports.AttendanceLogController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const faculty_m_service_1 = require("../faculty-m/faculty-m.service");
const attendance_log_service_1 = require("./attendance-log.service");
const create_attendance_log_dto_1 = require("./dto/create-attendance-log.dto");
const update_attendance_log_dto_1 = require("./dto/update-attendance-log.dto");
let AttendanceLogController = class AttendanceLogController {
    constructor(attendanceLogService, facultyMService) {
        this.attendanceLogService = attendanceLogService;
        this.facultyMService = facultyMService;
    }
    async create(attendanceLog) {
        const facultyM = await this.facultyMService.getfacultyBySubject(attendanceLog.subject);
        return await this.attendanceLogService.create(attendanceLog, facultyM);
    }
    async findAll() {
        const resp = await this.attendanceLogService.findAll();
        return resp;
    }
    async update(id, updateAttendanceLogDto) {
        const resp = await this.attendanceLogService.update(+id, updateAttendanceLogDto);
        return resp;
    }
    async remove(id) {
        const resp = await this.attendanceLogService.remove(+id);
        return resp;
    }
};
__decorate([
    (0, common_1.Post)('/addLogs'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_attendance_log_dto_1.CreateAttendanceLogDto]),
    __metadata("design:returntype", Promise)
], AttendanceLogController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AttendanceLogController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_attendance_log_dto_1.UpdateAttendanceLogDto]),
    __metadata("design:returntype", Promise)
], AttendanceLogController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AttendanceLogController.prototype, "remove", null);
AttendanceLogController = __decorate([
    (0, common_1.Controller)('attendanceLog'),
    (0, swagger_1.ApiTags)("attendance_log"),
    (0, swagger_1.ApiSecurity)("JWT-auth"),
    __metadata("design:paramtypes", [attendance_log_service_1.AttendanceLogService, faculty_m_service_1.FacultyMService])
], AttendanceLogController);
exports.AttendanceLogController = AttendanceLogController;
//# sourceMappingURL=attendance-log.controller.js.map