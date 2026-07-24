import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(signupDto: SignupDto): Promise<{
        id: number;
        name: string;
        email: string;
        role: import("../users/enums/user-role.enum").UserRole;
        createdAt: Date;
    }>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
    getProfile(request: any): any;
}
