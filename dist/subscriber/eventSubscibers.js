"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuserHistorySubscriber = exports.TrackHistorySubscriber = void 0;
const history_entity_1 = require("../history/history.entity");
const suser_entity_1 = require("../susers/entities/suser.entity");
const track_entity_1 = require("../track/entities/track.entity");
const typeorm_1 = require("typeorm");
const typeorm_revisions_1 = require("typeorm-revisions");
let TrackHistorySubscriber = class TrackHistorySubscriber extends typeorm_revisions_1.HistorySubscriber {
    get entity() {
        return track_entity_1.Track;
    }
    get historyEntity() {
        return history_entity_1.TrackHistory;
    }
};
TrackHistorySubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)()
], TrackHistorySubscriber);
exports.TrackHistorySubscriber = TrackHistorySubscriber;
let SuserHistorySubscriber = class SuserHistorySubscriber extends typeorm_revisions_1.HistorySubscriber {
    get entity() {
        return suser_entity_1.Suser;
    }
    get historyEntity() {
        return history_entity_1.SuserHistory;
    }
};
SuserHistorySubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)()
], SuserHistorySubscriber);
exports.SuserHistorySubscriber = SuserHistorySubscriber;
//# sourceMappingURL=eventSubscibers.js.map