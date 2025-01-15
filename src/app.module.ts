import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import dbConf from './config/databaseConf';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsModule } from './songs/songs.module';
import { HotelsModule } from './hotels/hotels.module';
import { ServicesModule } from './services/services.module';
import { RoomsModule } from './rooms/rooms.module';
import configuration from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({
    load: [configuration],
    isGlobal: true
  }),
  TypeOrmModule.forRoot(dbConf()),
  SongsModule,
  HotelsModule,
  ServicesModule,
  RoomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
