import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Song{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  artist: string;

  @Column()
  title: string;
}