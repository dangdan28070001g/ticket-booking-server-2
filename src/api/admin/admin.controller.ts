import { RoleEnum } from './../../enums/roles.enum';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { CurrentUser, Roles } from './../../decorator';
import { JwtAuthGuard } from './../../auth/guards';
import { AdminResetPasswordDto, AdminUpdatePasswordDto } from './dto';

@Controller('admin')
@ApiTags('Admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get('profile')
  @Roles(RoleEnum.STAFF)
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async profile(@CurrentUser() user) {
    return this.adminService.profile(user?.id);
  }

  @Patch('password')
  @Roles(RoleEnum.STAFF)
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async updatePassword(
    @CurrentUser() user,
    @Body() dto: AdminUpdatePasswordDto,
  ) {
    return this.adminService.updatePassword(user?.id, dto);
  }

  @Patch('reset-password')
  @Roles(RoleEnum.STAFF)
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async updateResetPassword(
    @CurrentUser() user,
    @Body() dto: AdminResetPasswordDto,
  ) {
    return this.adminService.resetPassword(dto);
  }

  // @Patch('')
  // @Roles(RoleEnum.STAFF)
  // @HttpCode(HttpStatus.OK)
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  // async updateAdmin(@CurrentUser() user, @Body() dto: AdminUpdateDto) {
  // return this.adminService.updatePassword(user?.id, dto);
  // }
}
