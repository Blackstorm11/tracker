"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SusersModule = void 0;
const common_1 = require("@nestjs/common");
const suser_service_1 = require("./suser.service");
const suser_controller_1 = require("./suser.controller");
const track_module_1 = require("../track/track.module");
const typeorm_1 = require("@nestjs/typeorm");
const suser_entity_1 = require("./entities/suser.entity");
const nest_access_control_1 = require("nest-access-control");
const user_roles_1 = require("../auth/user.roles");
const passport_1 = require("@nestjs/passport");
let SusersModule = class SusersModule {
};
SusersModule = __decorate([
    (0, common_1.Module)({
        imports: [nest_access_control_1.AccessControlModule.forRoles(user_roles_1.roles), track_module_1.TrackModule, typeorm_1.TypeOrmModule.forFeature([suser_entity_1.Suser]), passport_1.PassportModule],
        controllers: [suser_controller_1.SusersController],
        providers: [suser_service_1.SusersService],
        exports: [suser_service_1.SusersService]
    })
], SusersModule);
exports.SusersModule = SusersModule;
//# sourceMappingURL=suser.module.js.map