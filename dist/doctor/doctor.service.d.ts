import { Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { User } from '../users/entities/user.entity';
import { CreateDoctorProfileDto } from './dto/create-doctor-profile.dto';
import { UpdateDoctorProfileDto } from './dto/update-doctor-profile.dto';
export declare class DoctorService {
    private readonly doctorRepository;
    private readonly userRepository;
    constructor(doctorRepository: Repository<Doctor>, userRepository: Repository<User>);
    private removePassword;
    createProfile(userId: number, dto: CreateDoctorProfileDto): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            role: import("../users/enums/user-role.enum").UserRole;
            createdAt: Date;
            doctorProfile: Doctor;
            patientProfile: import("../patient/entities/patient.entity").Patient;
        };
        id: number;
        specialization: string;
        experience: number;
        qualification: string;
        consultationFee: number;
        availability: string;
        profileDetails?: string;
    }>;
    getProfile(userId: number): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            role: import("../users/enums/user-role.enum").UserRole;
            createdAt: Date;
            doctorProfile: Doctor;
            patientProfile: import("../patient/entities/patient.entity").Patient;
        };
        id: number;
        specialization: string;
        experience: number;
        qualification: string;
        consultationFee: number;
        availability: string;
        profileDetails?: string;
    }>;
    updateProfile(userId: number, dto: UpdateDoctorProfileDto): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            role: import("../users/enums/user-role.enum").UserRole;
            createdAt: Date;
            doctorProfile: Doctor;
            patientProfile: import("../patient/entities/patient.entity").Patient;
        };
        id: number;
        specialization: string;
        experience: number;
        qualification: string;
        consultationFee: number;
        availability: string;
        profileDetails?: string;
    }>;
}
