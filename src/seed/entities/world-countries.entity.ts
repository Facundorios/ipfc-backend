import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class WorldCountry {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;
  
}
