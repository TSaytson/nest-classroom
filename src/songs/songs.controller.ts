import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from './entity/song.entity';
import { CreateSongDTO } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  findAll(): Promise<Song[]>{
    return this.songsService.findAll();
  }
  
  @Get('/artist/:artist')
  findByArtist(@Param('artist') artist: string): Promise<Song[]>{
    return this.songsService.findByArtist(artist.slice(1));
  }

  @Get('/title/:title')
  findByTitle(@Param('title') title: string): Promise<Song[]>{
    return this.songsService.findByTitle(title.slice(1));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateSongDTO): Promise<Song>{
    return this.songsService.save(body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: number){
    return this.songsService.delete(id)
  }
}
