import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompanyContract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
