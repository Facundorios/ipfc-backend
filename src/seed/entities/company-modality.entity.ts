import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompanyModality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
