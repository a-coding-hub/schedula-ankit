import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { DoctorService } from './doctor.service';
import { CreateDoctorProfileDto } from './dto/create-doctor-profile.dto';
import { UpdateDoctorProfileDto } from './dto/update-doctor-profile.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

import { UserRole } from '../users/enums/user-role.enum';



@Controller('doctor')
export class DoctorController {
  constructor(
  private readonly doctorService: DoctorService,
) {}
  
  
@Get('profile')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.DOCTOR)
getProfile(@Req() request: any) {
  return this.doctorService.getProfile(
    request.user.userId,
  );
}

@Post('profile')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.DOCTOR)
createProfile(
  @Req() request: any,
  @Body() dto: CreateDoctorProfileDto,
) {
  return this.doctorService.createProfile(
    request.user.userId,
    dto,
  );
}

@Patch('profile')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.DOCTOR)
updateProfile(
  @Req() request: any,
  @Body() dto: UpdateDoctorProfileDto,
) {
  return this.doctorService.updateProfile(
    request.user.userId,
    dto,
  );
}

}