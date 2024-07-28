import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Company } from 'src/company/entities/company.entity';

@Entity()
export class CompanyContract {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Company, (company) => company.contract)
  companies: Company[]
}
