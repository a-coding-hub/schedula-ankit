import {
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePatientProfileDto {
  @IsInt()
  age: number;

  @IsString()
  gender: string;

  @IsString()
  contact: string;

  @IsOptional()
  @IsString()
  healthInformation?: string;
}