import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateDoctorProfileDto {
  @IsString()
  @IsNotEmpty()
  specialization: string;

  @IsInt()
  @Min(0)
  experience: number;

  @IsString()
  qualification: string;

  @IsInt()
  @Min(0)
  consultationFee: number;

  @IsString()
  availability: string;

  @IsOptional()
  @IsString()
  profileDetails?: string;
}