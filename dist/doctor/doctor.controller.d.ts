import { DoctorService } from './doctor.service';
import { CreateDoctorProfileDto } from './dto/create-doctor-profile.dto';
import { UpdateDoctorProfileDto } from './dto/update-doctor-profile.dto';
import { UserRole } from '../users/enums/user-role.enum';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    getProfile(request: any): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            role: UserRole;
            createdAt: Date;
            doctorProfile: import("./entities/doctor.entity").Doctor;
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
    createProfile(request: any, dto: CreateDoctorProfileDto): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            role: UserRole;
            createdAt: Date;
            doctorProfile: import("./entities/doctor.entity").Doctor;
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
    updateProfile(request: any, dto: UpdateDoctorProfileDto): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            role: UserRole;
            createdAt: Date;
            doctorProfile: import("./entities/doctor.entity").Doctor;
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
