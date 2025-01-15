import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { hotelRooms } from 'src/rooms/entities/room.entity';
import { hotelPhotos } from './entities/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel, hotelRooms, hotelPhotos])],
  controllers: [HotelsController],
  providers: [HotelsService],
})
export class HotelsModule {}
