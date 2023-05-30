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
exports.Track = exports.TrackStatus = void 0;
const user_roles_1 = require("../../auth/user.roles");
const suser_entity_1 = require("../../susers/entities/suser.entity");
const typeorm_1 = require("typeorm");
var TrackStatus;
(function (TrackStatus) {
    TrackStatus[TrackStatus["Created"] = 0] = "Created";
    TrackStatus[TrackStatus["InProgress"] = 1] = "InProgress";
    TrackStatus[TrackStatus["Done"] = 3] = "Done";
})(TrackStatus = exports.TrackStatus || (exports.TrackStatus = {}));
let Track = class Track extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Track.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Username" }),
    __metadata("design:type", String)
], Track.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "RollNo" }),
    __metadata("design:type", String)
], Track.prototype, "rollNo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 5, name: "semester" }),
    __metadata("design:type", Number)
], Track.prototype, "semester", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 10, name: "universityNo" }),
    __metadata("design:type", String)
], Track.prototype, "UniversityNo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "email" }),
    __metadata("design:type", String)
], Track.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "password" }),
    __metadata("design:type", String)
], Track.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { nullable: true }),
    __metadata("design:type", Array)
], Track.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: user_roles_1.UserRoles, default: user_roles_1.UserRoles.Reader }),
    __metadata("design:type", String)
], Track.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => suser_entity_1.Suser, (suser) => suser.track),
    __metadata("design:type", Array)
], Track.prototype, "suser", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(2)', select: false }),
    __metadata("design:type", Date)
], Track.prototype, "updateTime", void 0);
Track = __decorate([
    (0, typeorm_1.Entity)("local users")
], Track);
exports.Track = Track;
//# sourceMappingURL=track.entity.js.map