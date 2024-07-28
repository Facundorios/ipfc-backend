import { Company } from 'src/company/entities/company.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class CompanyIndustry {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Company, (company) => company.industry)
  companies: Company[];
}
