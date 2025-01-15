import { Hotel } from "src/hotels/entities/hotel.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class hotelRooms {

  constructor(
    name: string,
    beds: number,
    amount: number,
    isAvailable: boolean,
    hotel: Hotel
  ) {
    this.name = name
    this.beds = beds
    this.amount = amount
    this.isAvailable = isAvailable
    this.hotel = hotel
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('tinyint')
  beds: number;

  @Column('smallint')
  amount: number;

  @Column()
  isAvailable: boolean;

  @ManyToOne(() => Hotel, (hotel) => hotel.rooms, { nullable: false })
  @JoinColumn()
  public hotel: Hotel
}
