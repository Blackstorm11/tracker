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
exports.RegistorDTO = void 0;
const typeorm_1 = require("typeorm");
class RegistorDTO {
}
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RegistorDTO.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Username" }),
    __metadata("design:type", String)
], RegistorDTO.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "RollNo" }),
    __metadata("design:type", String)
], RegistorDTO.prototype, "rollNo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 5 }),
    __metadata("design:type", String)
], RegistorDTO.prototype, "semester", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 10 }),
    __metadata("design:type", String)
], RegistorDTO.prototype, "UniversityNo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    __metadata("design:type", String)
], RegistorDTO.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    __metadata("design:type", String)
], RegistorDTO.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    __metadata("design:type", Array)
], RegistorDTO.prototype, "images", void 0);
exports.RegistorDTO = RegistorDTO;
//# sourceMappingURL=registorDTO.js.map