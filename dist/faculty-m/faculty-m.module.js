"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyMModule = void 0;
const common_1 = require("@nestjs/common");
const faculty_m_service_1 = require("./faculty-m.service");
const faculty_m_controller_1 = require("./faculty-m.controller");
const typeorm_1 = require("@nestjs/typeorm");
const faculty_m_entity_1 = require("./entities/faculty-m.entity");
const nest_access_control_1 = require("nest-access-control");
const user_roles_1 = require("../auth/user.roles");
const passport_1 = require("@nestjs/passport");
let FacultyMModule = class FacultyMModule {
};
FacultyMModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([faculty_m_entity_1.FacultyM]), nest_access_control_1.AccessControlModule.forRoles(user_roles_1.roles), passport_1.PassportModule],
        controllers: [faculty_m_controller_1.FacultyMController],
        providers: [faculty_m_service_1.FacultyMService],
        exports: [faculty_m_service_1.FacultyMService]
    })
], FacultyMModule);
exports.FacultyMModule = FacultyMModule;
//# sourceMappingURL=faculty-m.module.js.map