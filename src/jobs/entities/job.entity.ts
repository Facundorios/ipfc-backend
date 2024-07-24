import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from 'src/company/entities/company.entity';

@Entity()
export class JobOffer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Company, (company) => company.jobOffers)
  company: Company;
}
