import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { Repository } from 'typeorm';
import { hotelRooms } from 'src/rooms/entities/room.entity';
import { hotelPhotos } from './entities/photo.entity';
import { RoomsService } from 'src/rooms/rooms.service';

@Injectable()
export class HotelsService {

  constructor(
    @InjectRepository(Hotel)
    private hotelRepository: Repository<Hotel>,
    @InjectRepository(hotelPhotos)
    private hotelPhotosRepository: Repository<hotelPhotos>,
    @InjectRepository(hotelRooms)
    private hotelRoomsRepository: Repository<hotelRooms>
  ) { }

  async create(hotel: CreateHotelDto) {
    const hotelExists = await this.hotelRepository.findBy({ name: hotel.name })
    if (hotelExists.length)
      throw new ConflictException('Hotel already exists')
    try {
      const createdHotel = await this.hotelRepository.save(hotel)
      hotel.rooms.forEach(({ amount, beds, isAvailable, name }) =>
        this.hotelRoomsRepository.save(
          new hotelRooms(name, beds, amount, isAvailable, createdHotel)
        )
      )
      hotel.photos.forEach(({ url }) =>
        this.hotelPhotosRepository.save(
          new hotelPhotos(url, createdHotel)
        )
      )
      return createdHotel;
    } catch (error) {
      console.log(error);
      throw new Error('An error occurred, please try again later')
    }
  }

  findAll() {
    return this.hotelRepository.find({
      relations: {
        photos: true,
        rooms: true
      }
    })
  }

  findOne(id: number) {
    return this.hotelRepository.findBy({id});
  }

  update(id: number, updatedHotel: UpdateHotelDto) {
    return this.hotelRepository.update({id}, updatedHotel);
  }

  async remove(id: number) {
    const hotelFound = await this.hotelRepository.findOneBy({ id })
    if (hotelFound) {
      await this.hotelRoomsRepository.delete({ hotel: hotelFound })
      await this.hotelPhotosRepository.delete({ hotel: hotelFound })
      return this.hotelRepository.delete(hotelFound);
    }
    throw new NotFoundException('Hotel not found')
  }
}
