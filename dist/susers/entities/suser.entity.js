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
exports.Suser = void 0;
const user_roles_1 = require("../../auth/user.roles");
const track_entity_1 = require("../../track/entities/track.entity");
const typeorm_1 = require("typeorm");
let Suser = class Suser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Suser.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], Suser.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 50 }),
    __metadata("design:type", String)
], Suser.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 50, unique: true }),
    __metadata("design:type", String)
], Suser.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Suser.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    __metadata("design:type", String)
], Suser.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: user_roles_1.UserRoles, default: user_roles_1.UserRoles.Admin }),
    __metadata("design:type", String)
], Suser.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(2)', select: false }),
    __metadata("design:type", Date)
], Suser.prototype, "updateTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => track_entity_1.Track, (track) => track.suser),
    __metadata("design:type", track_entity_1.Track)
], Suser.prototype, "track", void 0);
Suser = __decorate([
    (0, typeorm_1.Entity)("system users")
], Suser);
exports.Suser = Suser;
//# sourceMappingURL=suser.entity.js.map