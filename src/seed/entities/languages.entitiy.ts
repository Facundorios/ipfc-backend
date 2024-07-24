import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Language {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
