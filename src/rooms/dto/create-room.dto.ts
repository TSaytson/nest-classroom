import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateRoomDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  beds: number;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsBoolean()
  isAvailable: boolean;

  @IsNumber()
  @IsPositive()
  hotelId: number;
}
