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
exports.RegistrationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const registorDTO_1 = require("./dto/registorDTO");
const registration_entity_1 = require("./entities/registration.entity");
let RegistrationService = class RegistrationService {
    constructor(registrationRepository) {
        this.registrationRepository = registrationRepository;
    }
    async create(CreateRegistrationDto) {
        let registor = new registration_entity_1.Registration();
        registor.name = CreateRegistrationDto.name;
        registor.rollNo = CreateRegistrationDto.rollNo;
        registor.UniversityNo = CreateRegistrationDto.UniversityNo;
        registor.email = CreateRegistrationDto.email;
        registor.password = CreateRegistrationDto.password;
        registor.images = CreateRegistrationDto.images;
        await this.registrationRepository.save(registor);
        const registorDTO = new registorDTO_1.RegistorDTO();
        registorDTO.UniversityNo = CreateRegistrationDto.UniversityNo;
        registorDTO.email = CreateRegistrationDto.email;
        registorDTO.name = CreateRegistrationDto.name;
        registorDTO.password = CreateRegistrationDto.password;
        registorDTO.rollNo = CreateRegistrationDto.rollNo;
        registorDTO.images = CreateRegistrationDto.images;
        return registorDTO;
    }
    findAll() {
        return this.registrationRepository.find;
    }
    findOne(id) {
        return `This action returns a #${id} registration`;
    }
    update(id, updateRegistrationDto) {
        return `This action updates a #${id} registration`;
    }
    remove(id) {
        return `This action removes a #${id} registration`;
    }
};
RegistrationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registration_entity_1.Registration)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegistrationService);
exports.RegistrationService = RegistrationService;
//# sourceMappingURL=registration.service.js.map