import { Company } from 'src/company/entities/company.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class WorldCountry {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @OneToMany(() => Company, (company) => company.country)
  companies: Company[];
  
}
