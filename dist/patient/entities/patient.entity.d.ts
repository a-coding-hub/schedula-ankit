import { User } from '../../users/entities/user.entity';
export declare class Patient {
    id: number;
    age: number;
    gender: string;
    contact: string;
    healthInformation?: string;
    user: User;
}
