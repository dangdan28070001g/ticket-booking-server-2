import { TripStatusEnum } from '../../../enums/trip-status.enum';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsDate,
  IsNumber,
} from 'class-validator';

export class UpdateTripDto {
  @ApiPropertyOptional({
    example: 'Bến xe miền đông - Bến xe Đức Long Bảo Lộc',
  })
  @IsString({ message: 'Name is string' })
  @IsOptional()
  name: string;

  @ApiPropertyOptional({
    example:
      'Từ Hồ Chí Minh đi Bến xe Đức Long Bảo Lộc xuất phát từ 5h chiều hằng ngày',
  })
  @IsOptional()
  @IsString()
  note: string;

  @ApiPropertyOptional({ example: '2023-02-12' })
  @IsDate({ message: 'Start date is date' })
  @IsOptional()
  startDate: Date;

  @ApiPropertyOptional({ example: '2024-02-15T02:37:29.450Z' })
  @IsDate({ message: 'End date is date' })
  @IsOptional()
  endDate: Date;

  @ApiPropertyOptional({ example: 'd7d44845-b906-4a3c-be7b-232cc555f019' })
  @IsString({ message: 'From Station Id is string' })
  @IsOptional()
  fromStationId: string;

  @ApiPropertyOptional({ example: 'd7d44845-b906-4a3c-be7b-232cc555f071' })
  @IsString({ message: 'To Station Id is string' })
  @IsOptional()
  toStationId: string;

  @ApiPropertyOptional({ example: TripStatusEnum.ACTIVE })
  @IsOptional()
  @IsEnum(TripStatusEnum)
  @IsNumber()
  isActive: TripStatusEnum;
}
