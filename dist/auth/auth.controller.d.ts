import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private jwtService;
    constructor(jwtService: JwtService);
    login(req: any, LoginDto: LoginDto): {
        token: string;
    };
}
