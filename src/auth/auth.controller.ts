// import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { AuthGuard } from '@nestjs/passport';
// import { ApiTags } from '@nestjs/swagger';
// import { Suser } from 'src/susers/entities/suser.entity';
// import { Track } from 'src/track/entities/track.entity';
// import { LoginDto } from './dto/login.dto';


// @Controller('auth')
// @ApiTags('Login')
// export class AuthController {
//   constructor(private jwtService: JwtService) {}

//   @Post('/login')
//   @UseGuards(AuthGuard('local'))
//   login(@Req() req, @Body() LoginDto: LoginDto) {
//     // JWT_token
//     const user: Suser = req.user;
//     // const user:Track=req.user;
//     const payload = {
//       id: user._id,
//       email: user.email,
//     };
//     console.log(req.user);
  
//     return { token: this.jwtService.sign(payload) };
//   }
// }

import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { FacultyM } from 'src/faculty-m/entities/faculty-m.entity';
import { Suser } from 'src/susers/entities/suser.entity';
import { Track } from 'src/track/entities/track.entity';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

type AuthUser =  Track | Suser |FacultyM ;

@Controller('auth')
@ApiTags('Login')
export class AuthController {
  constructor(private jwtService: JwtService, private authService:AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Req() req, @Body() LoginDto: LoginDto) {
    // JWT_token
    const user: AuthUser = req.user;
    console.log('User Roles:', user.roles); // Log the user roles
    const payload = {
      id: user._id,
      email: user.email,
      role:user.roles
    };
    console.log(req.user);
    console.log('Payload:', payload); // Log the payload with the role
    return { token: this.jwtService.sign(payload) };
  }

  @Post('/forget_password')
  async sendPasswordResetEmail(@Body("email") email: string): Promise<void> {
    await this.authService.sendPasswordResetEmail(email);
    // You can handle the response or error messages here if needed
  }
}
