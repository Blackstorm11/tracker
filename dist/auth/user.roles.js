"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = exports.UserRoles = void 0;
const nest_access_control_1 = require("nest-access-control");
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Reader"] = "Reader";
    UserRoles["RW"] = "writer";
})(UserRoles = exports.UserRoles || (exports.UserRoles = {}));
exports.roles = new nest_access_control_1.RolesBuilder();
exports.roles.grant(UserRoles.Reader)
    .readAny(["posts"])
    .grant(UserRoles.Admin)
    .extend(UserRoles.Reader)
    .updateAny(["posts"])
    .createAny(["posts"])
    .deleteAny(["posts"])
    .grant(UserRoles.RW)
    .extend(UserRoles.Reader)
    .updateOwn(["posts"])
    .createOwn(['posts'])
    .deleteOwn(['posts']);
//# sourceMappingURL=user.roles.js.map