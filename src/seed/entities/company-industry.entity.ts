import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompanyIndustry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string
}
