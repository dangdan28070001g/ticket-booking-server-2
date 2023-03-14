import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, Length, IsNotEmpty } from 'class-validator';

export class CreateOrderDetailDto {
  @ApiPropertyOptional({ example: '' })
  @IsString({ message: 'NOTE_IS_STRING' })
  @IsOptional()
  note: string;

  @ApiProperty({ example: '5da6e37f-bb09-422c-aa27-e5eefa8cb709' })
  @IsNotEmpty({ message: 'ORDER_ID_IS_REQUIRED' })
  @IsString({ message: 'ORDER_ID_IS_STRING' })
  @Length(36, 36, { message: 'ORDER_ID_IS_36_CHARACTERS' })
  orderId: string;

  @ApiPropertyOptional({ example: '7b1e022a-96da-47c5-85b6-81858fd0f601' })
  @IsString({ message: 'SEAT_ID_IS_STRING' })
  @IsOptional()
  seatId: string;

  @ApiPropertyOptional({ example: '' })
  @IsString({ message: 'SEAT_CODE_IS_STRING' })
  @IsOptional()
  seatCode: string;

  @ApiProperty({ example: 'b87985ac-3b08-46bf-8e6f-02902dcaedaf' })
  @IsNotEmpty({ message: 'TRIP_DETAIL_ID_REQUIRED' })
  @IsString({ message: 'TRIP_DETAIL_ID_IS_STRING' })
  @Length(36, 36, { message: 'TRIP_DETAIL_ID_IS_36_CHARACTERS' })
  tripDetailId: string;
}
