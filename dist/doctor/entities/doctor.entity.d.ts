import { User } from '../../users/entities/user.entity';
export declare class Doctor {
    id: number;
    specialization: string;
    experience: number;
    qualification: string;
    consultationFee: number;
    availability: string;
    profileDetails?: string;
    user: User;
}
