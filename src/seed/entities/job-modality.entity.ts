import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class JobModality {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
