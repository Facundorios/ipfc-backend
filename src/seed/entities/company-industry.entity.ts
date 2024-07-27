import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class CompanyIndustry {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string
}
