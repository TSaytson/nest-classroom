import {IsNotEmpty, IsString} from 'class-validator'

export class CreateSongDTO {
  @IsNotEmpty()
  @IsString()
  artist:string;

  @IsNotEmpty()
  @IsString()
  title: string;
}