import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Relation } from "typeorm";
import { hotelPhotos } from "./photo.entity";
import { hotelRooms } from "src/rooms/entities/room.entity";

@Entity()
export class Hotel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: string;
  @Column()
  longitude: string;

  @OneToMany(() => hotelPhotos, (photo) => photo.hotel, {nullable: false})
  public photos: Relation<hotelPhotos[]>;

  @OneToMany(() => hotelRooms, (room) => room.hotel, {nullable: false})
  public rooms: Relation<hotelRooms[]>;
}
