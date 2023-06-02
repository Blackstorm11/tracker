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
exports.FacultyMController = void 0;
const common_1 = require("@nestjs/common");
const faculty_m_service_1 = require("./faculty-m.service");
const create_faculty_m_dto_1 = require("./dto/create-faculty-m.dto");
const update_faculty_m_dto_1 = require("./dto/update-faculty-m.dto");
const swagger_1 = require("@nestjs/swagger");
let FacultyMController = class FacultyMController {
    constructor(facultyMService) {
        this.facultyMService = facultyMService;
    }
    create(createFacultyMDto) {
        return this.facultyMService.create(createFacultyMDto);
    }
    findAll() {
        return this.facultyMService.findAll();
    }
    async findOne(id) {
        return await this.facultyMService.findFacultyById(id);
    }
    async findfacultyM(subject) {
        return await this.facultyMService.getfacultyById(subject);
    }
    update(id, updateFacultyMDto) {
        return this.facultyMService.update(+id, updateFacultyMDto);
    }
    remove(id) {
        return this.facultyMService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_faculty_m_dto_1.CreateFacultyMDto]),
    __metadata("design:returntype", void 0)
], FacultyMController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FacultyMController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FacultyMController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('get/:subject'),
    __param(0, (0, common_1.Param)('subject')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FacultyMController.prototype, "findfacultyM", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_faculty_m_dto_1.UpdateFacultyMDto]),
    __metadata("design:returntype", void 0)
], FacultyMController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacultyMController.prototype, "remove", null);
FacultyMController = __decorate([
    (0, swagger_1.ApiTags)(),
    (0, common_1.Controller)('faculty-m'),
    __metadata("design:paramtypes", [faculty_m_service_1.FacultyMService])
], FacultyMController);
exports.FacultyMController = FacultyMController;
//# sourceMappingURL=faculty-m.controller.js.map