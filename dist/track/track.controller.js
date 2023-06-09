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
exports.TrackController = void 0;
const common_1 = require("@nestjs/common");
const track_service_1 = require("./track.service");
const create_track_dto_1 = require("./dto/create-track.dto");
const swagger_1 = require("@nestjs/swagger");
let TrackController = class TrackController {
    constructor(trackService) {
        this.trackService = trackService;
    }
    async create(createTrackRequeat) {
        const resp = await this.trackService.create(createTrackRequeat);
    }
    async getUserImages(username) {
        const userImages = await this.trackService.getUserImages(username);
        const response = userImages.map((image, index) => ({
            label: `${username}_${index + 1}.png`,
            image,
        }));
        return response;
    }
    async getAllRollNo() {
        const rollNo = await this.trackService.findAllRollNo();
        return rollNo;
    }
    async findAll() {
        const resp = await this.trackService.findAll();
        return resp;
    }
    async findOne(email) {
        return this.trackService.findTrackByEmail(email);
    }
    async find(trackid) {
        const resp = await this.trackService.getOne(trackid);
        return resp;
    }
    async updatePassword(email, newPassword) {
        return this.trackService.updateOne(email, newPassword);
    }
    async remove(trackid) {
        const resp = await this.trackService.removebyid(trackid);
        return resp;
    }
};
__decorate([
    (0, swagger_1.ApiSecurity)("JWT-auth"),
    (0, common_1.Post)('/add_user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_track_dto_1.CreateTrackDto]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiSecurity)("JWT-auth"),
    (0, common_1.Get)(':username/images'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "getUserImages", null);
__decorate([
    (0, swagger_1.ApiSecurity)("JWT-auth"),
    (0, common_1.Get)('rollNo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "getAllRollNo", null);
__decorate([
    (0, swagger_1.ApiSecurity)("JWT-auth"),
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiSecurity)("JWT-auth"),
    (0, common_1.Get)('/:email'),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiSecurity)("JWT-auth"),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "find", null);
__decorate([
    (0, common_1.Put)('email/update-password/:email'),
    __param(0, (0, common_1.Param)('email')),
    __param(1, (0, common_1.Body)('newPassword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "updatePassword", null);
__decorate([
    (0, swagger_1.ApiSecurity)("JWT-auth"),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrackController.prototype, "remove", null);
TrackController = __decorate([
    (0, common_1.Controller)('track'),
    (0, swagger_1.ApiTags)('user'),
    __metadata("design:paramtypes", [track_service_1.TrackService])
], TrackController);
exports.TrackController = TrackController;
//# sourceMappingURL=track.controller.js.map