import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DoctorController } from './doctor/doctor.controller';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    // Loads variables from the .env file
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Connects NestJS to PostgreSQL
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        type: 'postgres',

        host: configService.get<string>('DB_HOST'),

        port: Number(configService.get<string>('DB_PORT')),

        username: configService.get<string>('DB_USERNAME'),

        password: configService.get<string>('DB_PASSWORD'),

        database: configService.get<string>('DB_NAME'),

        // Automatically finds entities we create later
        autoLoadEntities: true,

        // Automatically creates/updates tables during development
        synchronize: false,
      }),
    }),

    UsersModule,

    AuthModule,

    DoctorModule,

    PatientModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}