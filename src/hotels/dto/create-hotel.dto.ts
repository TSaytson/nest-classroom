import { OmitType } from "@nestjs/mapped-types";
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsNotEmptyObject, IsString, MinLength, ValidateNested } from "class-validator";
import { CreateRoomDto } from "src/rooms/dto/create-room.dto";
import { hotelPhotos } from "../entities/photo.entity";

export class CreateHotelDto {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  latitude: string;

  @IsNotEmpty()
  @IsString()
  longitude:string;

  @ValidateNested({each: true})
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => hotelPhotos)
  photos: hotelPhotos[];

  @ValidateNested({each: true})
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => OmitType(CreateRoomDto, ['hotelId']))
  rooms: CreateRoomDto[];
}
