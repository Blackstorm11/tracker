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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuserHistory = exports.TrackHistory = void 0;
const typeorm_history_1 = require("@anchan828/typeorm-history");
const suser_entity_1 = require("../susers/entities/suser.entity");
const typeorm_1 = require("typeorm");
const track_entity_1 = require("../track/entities/track.entity");
let TrackHistory = class TrackHistory extends track_entity_1.Track {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], TrackHistory.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TrackHistory.prototype, "originalID", void 0);
__decorate([
    (0, typeorm_history_1.HistoryActionColumn)(),
    __metadata("design:type", String)
], TrackHistory.prototype, "action", void 0);
TrackHistory = __decorate([
    (0, typeorm_1.Entity)()
], TrackHistory);
exports.TrackHistory = TrackHistory;
let SuserHistory = class SuserHistory extends suser_entity_1.Suser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SuserHistory.prototype, "_id", void 0);
__decorate([
    (0, typeorm_history_1.HistoryOriginalIdColumn)(),
    __metadata("design:type", String)
], SuserHistory.prototype, "originalID", void 0);
__decorate([
    (0, typeorm_history_1.HistoryActionColumn)(),
    __metadata("design:type", String)
], SuserHistory.prototype, "action", void 0);
SuserHistory = __decorate([
    (0, typeorm_1.Entity)()
], SuserHistory);
exports.SuserHistory = SuserHistory;
function GeneratedColumn() {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=history.entity.js.map