import { UserRole } from '../enums/user-role.enum';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: Date;
}
