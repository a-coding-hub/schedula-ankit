import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { PatientService } from './patient.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

import { UserRole } from '../users/enums/user-role.enum';

import { CreatePatientProfileDto } from './dto/create-patient-profile.dto';
import { UpdatePatientProfileDto } from './dto/update-patient-profile.dto';

@Controller('patient')
export class PatientController {
  constructor(
    private readonly patientService: PatientService,
  ) {}

  @Post('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PATIENT)
  createProfile(
    @Req() request: any,
    @Body() dto: CreatePatientProfileDto,
  ) {
    return this.patientService.createProfile(
      request.user.userId,
      dto,
    );
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PATIENT)
  getProfile(@Req() request: any) {
    return this.patientService.getProfile(
      request.user.userId,
    );
  }

  @Patch('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PATIENT)
  updateProfile(
    @Req() request: any,
    @Body() dto: UpdatePatientProfileDto,
  ) {
    return this.patientService.updateProfile(
      request.user.userId,
      dto,
    );
  }
}