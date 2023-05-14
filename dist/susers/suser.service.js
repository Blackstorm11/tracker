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
exports.SusersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const track_service_1 = require("../track/track.service");
const typeorm_2 = require("typeorm");
const suser_dto_1 = require("./dto/suser.dto");
const suser_entity_1 = require("./entities/suser.entity");
let SusersService = class SusersService {
    constructor(suserRepository, trackService) {
        this.suserRepository = suserRepository;
        this.trackService = trackService;
    }
    async create(createSuserDto, track_id) {
        let suser = new suser_entity_1.Suser();
        suser.firstname = createSuserDto.firstname;
        suser.lastname = createSuserDto.lastname;
        suser.username = createSuserDto.username;
        suser.email = createSuserDto.email;
        suser.password = createSuserDto.password;
        await this.suserRepository.save(suser);
        const suserDTO = new suser_dto_1.SuserDTO();
        suserDTO._id = suser._id;
        suserDTO.email = suser.email;
        suserDTO.firstname = suser.firstname;
        suserDTO.lastname = suser.lastname;
        suserDTO.password = suser.password;
        suserDTO.username = suser.username;
        return suserDTO;
    }
    findAll() {
        return this.suserRepository.find();
    }
    findSuserByEmail(email) {
        return this.suserRepository.findOne({ where: { email: email } });
    }
    findSuserById(id) {
        return this.suserRepository.findOne({ where: { _id: id } });
    }
    update(id, updateSuserDto) {
        return `This action updates a #${id} suser`;
    }
    remove(id) {
        return `This action removes a #${id} suser`;
    }
};
SusersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(suser_entity_1.Suser)),
    __metadata("design:paramtypes", [typeorm_2.Repository, track_service_1.TrackService])
], SusersService);
exports.SusersService = SusersService;
//# sourceMappingURL=suser.service.js.map