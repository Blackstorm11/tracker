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
exports.UpdateAttendanceLogDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const create_attendance_log_dto_1 = require("./create-attendance-log.dto");
class UpdateAttendanceLogDto extends (0, swagger_1.PartialType)(create_attendance_log_dto_1.CreateAttendanceLogDto) {
}
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UpdateAttendanceLogDto.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "person" }),
    __metadata("design:type", String)
], UpdateAttendanceLogDto.prototype, "person", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "status", default: "p" }),
    __metadata("design:type", String)
], UpdateAttendanceLogDto.prototype, "Status", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(2)', select: false }),
    __metadata("design:type", Date)
], UpdateAttendanceLogDto.prototype, "updateTime", void 0);
exports.UpdateAttendanceLogDto = UpdateAttendanceLogDto;
//# sourceMappingURL=update-attendance-log.dto.js.map