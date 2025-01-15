import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { Song } from './entity/song.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSongDTO } from './dto/create-song.dto';

@Injectable()
export class SongsService {

  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>
  ) { }

  findAll() {
    return this.songsRepository.find();
  }

  async findByArtist(artist: string){
    return this.songsRepository.findBy({artist})
  }

  findByTitle(title: string){
    return this.songsRepository.findBy({title})
  }

  async save({ artist, title }: CreateSongDTO) {
    const songExists = await this.songsRepository.findBy({artist, title})
    if (songExists.length)
      throw new ConflictException('Song is already registred')
    return this.songsRepository.save({artist, title})
  }

  delete(id:number) {
    return this.songsRepository.delete({id})
  }
}
