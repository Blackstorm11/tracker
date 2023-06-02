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
exports.FacultyMService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const faculty_m_entity_1 = require("./entities/faculty-m.entity");
let FacultyMService = class FacultyMService {
    constructor(facultyMRepository) {
        this.facultyMRepository = facultyMRepository;
    }
    async create(createFacultyMDto) {
        let facultyM = new faculty_m_entity_1.FacultyM();
        facultyM.Username = createFacultyMDto.Username;
        facultyM.email = createFacultyMDto.email;
        facultyM.password = createFacultyMDto.password;
        facultyM.subject = createFacultyMDto.subject;
        return await this.facultyMRepository.save(facultyM);
    }
    findAll() {
        return this.facultyMRepository.find();
    }
    async findFacultyById(id) {
        console.log('id:', id);
        return await this.facultyMRepository.findOne({
            where: { id },
            relations: ['attendanceLog'],
        });
    }
    async getfacultyById(subject) {
        return await this.facultyMRepository.findOne({
            where: { subject },
            relations: ['attendanceLog']
        });
    }
    update(id, updateFacultyMDto) {
        return `This action updates a #${id} facultyM`;
    }
    remove(id) {
        return `This action removes a #${id} facultyM`;
    }
};
FacultyMService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(faculty_m_entity_1.FacultyM)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FacultyMService);
exports.FacultyMService = FacultyMService;
//# sourceMappingURL=faculty-m.service.js.map