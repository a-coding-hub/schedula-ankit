"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const doctor_entity_1 = require("./entities/doctor.entity");
const user_entity_1 = require("../users/entities/user.entity");
let DoctorService = class DoctorService {
    doctorRepository;
    userRepository;
    constructor(doctorRepository, userRepository) {
        this.doctorRepository = doctorRepository;
        this.userRepository = userRepository;
    }
    removePassword(doctor) {
        const { password, ...userWithoutPassword } = doctor.user;
        return {
            ...doctor,
            user: userWithoutPassword,
        };
    }
    async createProfile(userId, dto) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
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
            throw new common_1.ConflictException('Doctor profile already exists');
        }
        const doctor = this.doctorRepository.create({
            ...dto,
            user,
        });
        const savedDoctor = await this.doctorRepository.save(doctor);
        return this.removePassword(savedDoctor);
    }
    async getProfile(userId) {
        const doctor = await this.doctorRepository.findOne({
            where: {
                user: {
                    id: userId,
                },
            },
            relations: ['user'],
        });
        if (!doctor) {
            throw new common_1.NotFoundException('Doctor profile not found');
        }
        return this.removePassword(doctor);
    }
    async updateProfile(userId, dto) {
        const doctor = await this.doctorRepository.findOne({
            where: {
                user: {
                    id: userId,
                },
            },
            relations: ['user'],
        });
        if (!doctor) {
            throw new common_1.NotFoundException('Doctor profile not found');
        }
        Object.assign(doctor, dto);
        const updatedDoctor = await this.doctorRepository.save(doctor);
        return this.removePassword(updatedDoctor);
    }
};
exports.DoctorService = DoctorService;
exports.DoctorService = DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(doctor_entity_1.Doctor)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DoctorService);
//# sourceMappingURL=doctor.service.js.map