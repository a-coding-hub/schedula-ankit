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
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const doctor_service_1 = require("./doctor.service");
const create_doctor_profile_dto_1 = require("./dto/create-doctor-profile.dto");
const update_doctor_profile_dto_1 = require("./dto/update-doctor-profile.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const user_role_enum_1 = require("../users/enums/user-role.enum");
let DoctorController = class DoctorController {
    doctorService;
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    getProfile(request) {
        return this.doctorService.getProfile(request.user.userId);
    }
    createProfile(request, dto) {
        return this.doctorService.createProfile(request.user.userId, dto);
    }
    updateProfile(request, dto) {
        return this.doctorService.updateProfile(request.user.userId, dto);
    }
};
exports.DoctorController = DoctorController;
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.DOCTOR),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Post)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.DOCTOR),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_doctor_profile_dto_1.CreateDoctorProfileDto]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "createProfile", null);
__decorate([
    (0, common_1.Patch)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_role_enum_1.UserRole.DOCTOR),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_doctor_profile_dto_1.UpdateDoctorProfileDto]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "updateProfile", null);
exports.DoctorController = DoctorController = __decorate([
    (0, common_1.Controller)('doctor'),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService])
], DoctorController);
//# sourceMappingURL=doctor.controller.js.map