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
exports.TrackService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const track_dto_1 = require("./dto/track.dto");
const track_entity_1 = require("./entities/track.entity");
let TrackService = class TrackService {
    constructor(trackRepository) {
        this.trackRepository = trackRepository;
    }
    async create(createTrackRequeat) {
        let track = new track_entity_1.Track();
        track.name = createTrackRequeat.name;
        track.email = createTrackRequeat.email;
        track.rollNo = createTrackRequeat.rollNo;
        track.UniversityNo = createTrackRequeat.UniversityNo;
        track.password = createTrackRequeat.password;
        track.semester = createTrackRequeat.semester;
        track.images = createTrackRequeat.images || [];
        await this.trackRepository.save(track);
        const trackDTO = new track_dto_1.TrackDto();
        trackDTO._id = track._id;
        trackDTO.name = track.name;
        trackDTO.email = track.email;
        trackDTO.UniversityNo = track.UniversityNo;
        trackDTO.images = track.images;
        trackDTO.password = track.password;
        trackDTO.semester = track.semester;
        trackDTO.rollNo = track.rollNo;
        return trackDTO;
    }
    async getUserImages(username) {
        const track = await this.trackRepository
            .createQueryBuilder('track')
            .where('track.name = :username', { username })
            .getOne();
        if (!track) {
            throw new Error('User not found');
        }
        return track.images;
    }
    async findAllRollNo() {
        const tracks = await this.trackRepository.find({ select: ['rollNo'] });
        return tracks.map((track) => track.rollNo);
    }
    async findAll() {
        const track = await this.trackRepository.find();
        const trackDTO = track.map(x => this.entityToDto(x));
        return trackDTO;
    }
    async updateOne(email, newPassword) {
        const track = await this.trackRepository.findOne({ where: { email } });
        if (!track) {
            throw new Error('User not found');
        }
        track.password = newPassword;
        return this.trackRepository.save(track);
    }
    findTrackById(id) {
        return this.trackRepository.findOneOrFail({ where: { _id: id } });
    }
    findTrackByEmail(email) {
        return this.trackRepository.findOne({ where: { email: email } });
    }
    async getOne(trackid) {
        const track = await this.trackRepository.findOneBy({ _id: trackid });
        if (!track)
            throw new common_1.NotFoundException('User with the id ${trackid} was not found');
        const trackDTO = this.entityToDto(track);
        return track;
    }
    entityToDto(track) {
        const trackDto = new track_dto_1.TrackDto();
        trackDto._id = track._id;
        trackDto.name = track.name;
        trackDto.email = track.email;
        trackDto.rollNo = track.rollNo;
        trackDto.UniversityNo = track.UniversityNo;
        trackDto.images = track.images;
        trackDto.password = track.password;
        trackDto.semester = track.semester;
        return trackDto;
    }
    async removebyid(trackid) {
        const track = await this.trackRepository.findOneBy({ _id: trackid });
        return track;
    }
};
TrackService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(track_entity_1.Track)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TrackService);
exports.TrackService = TrackService;
//# sourceMappingURL=track.service.js.map