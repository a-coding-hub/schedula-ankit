import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  age: number;

  @Column()
  gender: string;

  @Column()
  contact: string;

  @Column({
    nullable: true,
  })
  healthInformation?: string;

  @OneToOne(() => User, (user) => user.patientProfile)
  @JoinColumn()
  user: User;
}