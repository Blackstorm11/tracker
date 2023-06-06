import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private jwtService;
    private authService;
    constructor(jwtService: JwtService, authService: AuthService);
    login(req: any, LoginDto: LoginDto): {
        token: string;
    };
    sendPasswordResetEmail(email: string): Promise<void>;
}
