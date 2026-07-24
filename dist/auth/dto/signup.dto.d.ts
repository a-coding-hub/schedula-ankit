import { UserRole } from '../../users/enums/user-role.enum';
export declare class SignupDto {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}
