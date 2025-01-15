import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Hotel } from "src/hotels/entities/hotel.entity";
import { hotelPhotos } from "src/hotels/entities/photo.entity";
import { hotelRooms } from "src/rooms/entities/room.entity";
import { Song } from "src/songs/entity/song.entity";

export default registerAs('database', 
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Hotel, Song, hotelPhotos, hotelRooms],
    synchronize: true
  }
))