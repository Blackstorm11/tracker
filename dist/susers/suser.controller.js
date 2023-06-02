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
exports.SusersController = void 0;
const common_1 = require("@nestjs/common");
const suser_service_1 = require("./suser.service");
const create_suser_dto_1 = require("./dto/create-suser.dto");
const update_suser_dto_1 = require("./dto/update-suser.dto");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const nest_access_control_1 = require("nest-access-control");
let SusersController = class SusersController {
    constructor(susersService) {
        this.susersService = susersService;
    }
    async create(createSuserDto, trackid) {
        return this.susersService.create(createSuserDto, trackid);
    }
    async findAll() {
        return this.susersService.findAll();
    }
    async findOne(email) {
        return this.susersService.findSuserByEmail(email);
    }
    async findById(id) {
        return this.susersService.findSuserById(id);
    }
    update(id, updateSuserDto) {
        return this.susersService.update(+id, updateSuserDto);
    }
    remove(id) {
        return this.susersService.remove(+id);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt"), nest_access_control_1.ACGuard),
    (0, nest_access_control_1.UseRoles)({
        possession: 'any',
        action: 'create',
        resource: 'posts'
    }),
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_suser_dto_1.CreateSuserDto, String]),
    __metadata("design:returntype", Promise)
], SusersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SusersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:email'),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SusersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/GET/:id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SusersController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_suser_dto_1.UpdateSuserDto]),
    __metadata("design:returntype", void 0)
], SusersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SusersController.prototype, "remove", null);
SusersController = __decorate([
    (0, common_1.Controller)('suser'),
    (0, swagger_1.ApiTags)("system users"),
    (0, swagger_1.ApiSecurity)("JWT-auth"),
    __metadata("design:paramtypes", [suser_service_1.SusersService])
], SusersController);
exports.SusersController = SusersController;
//# sourceMappingURL=suser.controller.js.map