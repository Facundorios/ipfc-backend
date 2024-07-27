import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class CompanyContract {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
