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
exports.TimetableService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const timetableDTO_1 = require("./dto/timetableDTO");
const timetable_entity_1 = require("./entities/timetable.entity");
let TimetableService = class TimetableService {
    constructor(timetableRepository) {
        this.timetableRepository = timetableRepository;
    }
    async create(CreateTimetableRequest) {
        let timetable = new timetable_entity_1.Timetable();
        timetable.Time = CreateTimetableRequest.Time;
        timetable.Subject = CreateTimetableRequest.Subject;
        await this.timetableRepository.save(timetable);
        const timetableDTO = new timetableDTO_1.TimetableDTO();
        timetableDTO._id = timetable._id;
        timetableDTO.Time = timetable.Time;
        timetableDTO.Subject = timetable.Subject;
        return timetableDTO;
    }
    async findAll() {
        const timetable = await this.timetableRepository.find();
        return timetable;
    }
    findOne(id) {
        return `This action returns a #${id} timetable`;
    }
    update(id, updateTimetableDto) {
        return `This action updates a #${id} timetable`;
    }
    remove(id) {
        return `This action removes a #${id} timetable`;
    }
};
TimetableService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(timetable_entity_1.Timetable)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TimetableService);
exports.TimetableService = TimetableService;
//# sourceMappingURL=timetable.service.js.map