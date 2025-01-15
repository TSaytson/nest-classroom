import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { hotelRooms } from './entities/room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([hotelRooms])],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}
