import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelDto } from './create-hotel.dto';
import { IsNumberString } from 'class-validator';

export class UpdateHotelDto extends PartialType(CreateHotelDto) {}

export class IdDto {
  @IsNumberString()
  id: number;
}