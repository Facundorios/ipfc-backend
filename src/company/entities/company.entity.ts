import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JobOffer } from 'src/jobs/entities/job.entity';
import { Association } from 'src/associations/entities/association.entity';
import { CompanyContract, CompanyIndustry } from 'src/seed/entities';
import { companyContracts } from 'src/seed/data';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column({
    default:
      'https://th.bing.com/th/id/OIP.tu5yvoyO5oYFWYzLVOf-BwHaHa?rs=1&pid=ImgDetMain',
    nullable: true,
  })
  logoUrl: string;

  @Column()
  cantEmployees: number;

  @Column({
    type: 'enum',
    enum: ['pendiente', 'aceptada', 'rechazada'],
    default: 'pendiente',
  })
  status: string;

  @Column()
  justification: string;

  @OneToMany(() => JobOffer, (jobOffer) => jobOffer.company, { eager: true })
  jobOffers?: JobOffer[];

  @OneToMany(() => Association, (association) => association.company)
  associations?: Association[];

  @ManyToOne(() => CompanyContract, (contract) => contract.companies)
  contract: CompanyContract;

  @ManyToOne(() => CompanyIndustry, (industry) => industry.companies)
  industry: CompanyIndustry;
}
