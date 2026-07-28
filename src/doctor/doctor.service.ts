import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Doctor } from './entities/doctor.entity';
import { User } from '../users/entities/user.entity';
import { CreateDoctorProfileDto } from './dto/create-doctor-profile.dto';
import { UpdateDoctorProfileDto } from './dto/update-doctor-profile.dto';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  private removePassword(doctor: Doctor) {
    const { password, ...userWithoutPassword } = doctor.user;

    return {
      ...doctor,
      user: userWithoutPassword,
    };
  }

  async createProfile(
    userId: number,
    dto: CreateDoctorProfileDto,
  ) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const existingProfile = await this.doctorRepository.findOne({
      where: {
        user: {
          id: userId,
        },
      },
      relations: ['user'],
    });

    if (existingProfile) {
      throw new ConflictException(
        'Doctor profile already exists',
      );
    }

    const doctor = this.doctorRepository.create({
      ...dto,
      user,
    });

    const savedDoctor = await this.doctorRepository.save(doctor);

    return this.removePassword(savedDoctor);
  }

  async getProfile(userId: number) {
    const doctor = await this.doctorRepository.findOne({
      where: {
        user: {
          id: userId,
        },
      },
      relations: ['user'],
    });

    if (!doctor) {
      throw new NotFoundException('Doctor profile not found');
    }

    return this.removePassword(doctor);
  }

  async updateProfile(
    userId: number,
    dto: UpdateDoctorProfileDto,
  ) {
    const doctor = await this.doctorRepository.findOne({
      where: {
        user: {
          id: userId,
        },
      },
      relations: ['user'],
    });

    if (!doctor) {
      throw new NotFoundException('Doctor profile not found');
    }

    Object.assign(doctor, dto);

    const updatedDoctor = await this.doctorRepository.save(doctor);

    return this.removePassword(updatedDoctor);
  }
}