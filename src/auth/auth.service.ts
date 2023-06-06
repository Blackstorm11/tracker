import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FacultyMService } from 'src/faculty-m/faculty-m.service';
import { SusersService } from 'src/susers/suser.service';
import { TrackService } from 'src/track/track.service';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as nodemailer from "nodemailer";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthService {private readonly jwtSecret: string = "your-secret-key";
   constructor(
  private suserService: SusersService,
  private userService: TrackService,
  private facultyService: FacultyMService
) {}

async sendPasswordResetEmail(email: string): Promise<void> {
  const user = await this.suserService.findSuserByEmail(email)
    ?? await this.userService.findTrackByEmail(email)
    ?? await this.facultyService.findFacultyByEmail(email);

  if (user) {
    // Generate the reset token
    const resetToken = jwt.sign({ email }, this.jwtSecret, { expiresIn: "1h" });


      // Create the reset link with the reset token
      const resetLink = `http://localhost:3001/reset-password/${resetToken}`;


    // Send the email to the user
    try {
      const transporter = nodemailer.createTransport({
        // Configure the email transport options (SMTP, Gmail, etc.)
        // Refer to the Nodemailer documentation for more details
      });

      await transporter.sendMail({
        from: "ram@example.com", // Sender email address
        to: email, // Recipient email address
        subject: "Password Reset Request",
        html: `
          <p>Hello,</p>
          <p>You have requested to reset your password. Please click the link below to proceed:</p>
          <a href="${resetLink}">Reset Password</a>
          <p>If you didn't request a password reset, please ignore this email.</p>
        `,
      });

      console.log(`Password reset email sent to ${email}`);
    } catch (error) {
      console.error(`Failed to send password reset email to ${email}`, error);
      throw new Error("Failed to send password reset email");
    }
  }
}

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
