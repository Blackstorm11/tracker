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
exports.LocalStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
const suser_service_1 = require("../../susers/suser.service");
const track_service_1 = require("../../track/track.service");
const faculty_m_service_1 = require("../../faculty-m/faculty-m.service");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(suserService, userService, facultyService) {
        super({
            usernameField: "email",
            passwordField: "password"
        });
        this.suserService = suserService;
        this.userService = userService;
        this.facultyService = facultyService;
    }
    async validate(email, password) {
        const suser = await this.suserService.findSuserByEmail(email);
        if (suser && suser.password == password)
            return suser;
        const track = await this.userService.findTrackByEmail(email);
        if (track && track.password == password)
            return track;
        const facultyM = await this.facultyService.findFacultyByEmail(email);
        if (facultyM && facultyM.password == password)
            return facultyM;
        throw new common_1.UnauthorizedException('Invalid email or password');
    }
};
LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [suser_service_1.SusersService,
        track_service_1.TrackService,
        faculty_m_service_1.FacultyMService])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;
//# sourceMappingURL=local.strategy.js.map