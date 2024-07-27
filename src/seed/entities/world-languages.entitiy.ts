import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class WorldLanguage {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
