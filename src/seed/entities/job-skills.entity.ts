import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class JobSkill {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
