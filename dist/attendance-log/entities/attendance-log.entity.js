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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceLog = void 0;
const typeorm_1 = require("typeorm");
const date_fns_1 = require("date-fns");
const faculty_m_entity_1 = require("../../faculty-m/entities/faculty-m.entity");
let AttendanceLog = class AttendanceLog {
    setUpdateTimestamp() {
        this.updateTime = new Date();
    }
    get formattedUpdateTime() {
        return (0, date_fns_1.format)(this.updateTime, 'HH:mm:ss.SS');
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AttendanceLog.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "person" }),
    __metadata("design:type", String)
], AttendanceLog.prototype, "person", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "status", default: "p" }),
    __metadata("design:type", String)
], AttendanceLog.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AttendanceLog.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AttendanceLog.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], AttendanceLog.prototype, "updateTime", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttendanceLog.prototype, "setUpdateTimestamp", null);
__decorate([
    (0, typeorm_1.ManyToOne)(() => faculty_m_entity_1.FacultyM, (facultyM) => facultyM.attendanceLog),
    (0, typeorm_1.JoinColumn)({ name: 'subject', referencedColumnName: 'subject' }),
    __metadata("design:type", Array)
], AttendanceLog.prototype, "facultyM", void 0);
AttendanceLog = __decorate([
    (0, typeorm_1.Entity)("Attendance Log")
], AttendanceLog);
exports.AttendanceLog = AttendanceLog;
//# sourceMappingURL=attendance-log.entity.js.map