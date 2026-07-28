import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Patient } from './entities/patient.entity';
import { User } from '../users/entities/user.entity';

import { CreatePatientProfileDto } from './dto/create-patient-profile.dto';
import { UpdatePatientProfileDto } from './dto/update-patient-profile.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  private removePassword(patient: Patient) {
    const { password, ...userWithoutPassword } = patient.user;

    return {
      ...patient,
      user: userWithoutPassword,
    };
  }

  async createProfile(
    userId: number,
    dto: CreatePatientProfileDto,
  ) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const existingProfile =
      await this.patientRepository.findOne({
        where: {
          user: {
            id: userId,
          },
        },
        relations: ['user'],
      });

    if (existingProfile) {
      throw new ConflictException(
        'Patient profile already exists',
      );
    }

    const patient = this.patientRepository.create({
      ...dto,
      user,
    });

    const savedPatient =
      await this.patientRepository.save(patient);

    return this.removePassword(savedPatient);
  }

  async getProfile(userId: number) {
    const patient =
      await this.patientRepository.findOne({
        where: {
          user: {
            id: userId,
          },
        },
        relations: ['user'],
      });

    if (!patient) {
      throw new NotFoundException(
        'Patient profile not found',
      );
    }

    return this.removePassword(patient);
  }

  async updateProfile(
    userId: number,
    dto: UpdatePatientProfileDto,
  ) {
    const patient =
      await this.patientRepository.findOne({
        where: {
          user: {
            id: userId,
          },
        },
        relations: ['user'],
      });

    if (!patient) {
      throw new NotFoundException(
        'Patient profile not found',
      );
    }

    Object.assign(patient, dto);

    const updatedPatient =
      await this.patientRepository.save(patient);

    return this.removePassword(updatedPatient);
  }
}