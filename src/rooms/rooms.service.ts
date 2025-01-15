import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { hotelRooms } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(hotelRooms)
    private roomsRepository: Repository<hotelRooms>
  ){}
  create(room: CreateRoomDto) {
    return this.roomsRepository.insert(room);
  }

  findAll() {
    return this.roomsRepository.find();
  }

  findOne(id: number) {
    return this.roomsRepository.findBy({id});
  }

  update(id: number, updatedRoom: UpdateRoomDto) {
    return this.roomsRepository.update({id}, updatedRoom);
  }

  remove(id: number) {
    return this.roomsRepository.delete({id});
  }
}
