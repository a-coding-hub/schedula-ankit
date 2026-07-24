import { UsersService } from '../users/users.service';
import { SignupDto } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
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
}
