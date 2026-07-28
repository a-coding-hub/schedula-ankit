import { UserRole } from '../enums/user-role.enum';
import { Doctor } from '../../doctor/entities/doctor.entity';
import { Patient } from '../../patient/entities/patient.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    doctorProfile: Doctor;
    patientProfile: Patient;
}
