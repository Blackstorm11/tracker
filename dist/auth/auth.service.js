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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const faculty_m_service_1 = require("../faculty-m/faculty-m.service");
const suser_service_1 = require("../susers/suser.service");
const track_service_1 = require("../track/track.service");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
let AuthService = class AuthService {
    constructor(suserService, userService, facultyService) {
        this.suserService = suserService;
        this.userService = userService;
        this.facultyService = facultyService;
        this.jwtSecret = "your-secret-key";
    }
    async sendPasswordResetEmail(email) {
        var _a, _b;
        const user = (_b = (_a = await this.suserService.findSuserByEmail(email)) !== null && _a !== void 0 ? _a : await this.userService.findTrackByEmail(email)) !== null && _b !== void 0 ? _b : await this.facultyService.findFacultyByEmail(email);
        if (user) {
            const resetToken = jwt.sign({ email }, this.jwtSecret, { expiresIn: "1h" });
            const resetLink = `http://localhost:3001/reset-password/${resetToken}`;
            try {
                const transporter = nodemailer.createTransport({});
                await transporter.sendMail({
                    from: "ram@example.com",
                    to: email,
                    subject: "Password Reset Request",
                    html: `
          <p>Hello,</p>
          <p>You have requested to reset your password. Please click the link below to proceed:</p>
          <a href="${resetLink}">Reset Password</a>
          <p>If you didn't request a password reset, please ignore this email.</p>
        `,
                });
                console.log(`Password reset email sent to ${email}`);
            }
            catch (error) {
                console.error(`Failed to send password reset email to ${email}`, error);
                throw new Error("Failed to send password reset email");
            }
        }
    }
    create(createAuthDto) {
        return 'This action adds a new auth';
    }
    findAll() {
        return `This action returns all auth`;
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    update(id, updateAuthDto) {
        return `This action updates a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [suser_service_1.SusersService,
        track_service_1.TrackService,
        faculty_m_service_1.FacultyMService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map