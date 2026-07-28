import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRole } from '../enums/user-role.enum';

import { OneToOne } from 'typeorm';
import { Doctor } from '../../doctor/entities/doctor.entity';
import { Patient } from '../../patient/entities/patient.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  role: UserRole;

  @CreateDateColumn()
  createdAt: Date;

  @OneToOne(() => Doctor, (doctor) => doctor.user)
  doctorProfile: Doctor;

  @OneToOne(() => Patient, (patient) => patient.user)
  patientProfile: Patient;


}