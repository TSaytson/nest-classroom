import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { Hotel } from "./hotel.entity";
import { IsNotEmpty } from "class-validator";

@Entity()
export class hotelPhotos {

  constructor(
    url: string,
    hotel: Hotel
  ) {
    this.url = url
    this.hotel = hotel
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  url: string;

  @ManyToOne(() => Hotel, (hotel) => hotel.photos, { nullable: false })
  @JoinColumn()
  public hotel: Relation<Hotel>
}