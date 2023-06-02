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
exports.FacultyM = void 0;
const attendance_log_entity_1 = require("../../attendance-log/entities/attendance-log.entity");
const typeorm_1 = require("typeorm");
let FacultyM = class FacultyM {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FacultyM.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], FacultyM.prototype, "Username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], FacultyM.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FacultyM.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FacultyM.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => attendance_log_entity_1.AttendanceLog, (attendanceLog) => attendanceLog.facultyM),
    __metadata("design:type", Array)
], FacultyM.prototype, "attendanceLog", void 0);
FacultyM = __decorate([
    (0, typeorm_1.Entity)("Faculty Members")
], FacultyM);
exports.FacultyM = FacultyM;
//# sourceMappingURL=faculty-m.entity.js.map