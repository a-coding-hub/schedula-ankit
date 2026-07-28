import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('doctors')
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  specialization: string;

  @Column()
  experience: number;

  @Column()
  qualification: string;

  @Column('decimal')
  consultationFee: number;

  @Column()
  availability: string;

  @Column({
    nullable: true,
  })
  profileDetails?: string;

  @OneToOne(() => User, (user) => user.doctorProfile)
  @JoinColumn()
  user: User;
}