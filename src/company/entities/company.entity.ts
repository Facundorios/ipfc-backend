import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobOffer } from 'src/jobs/entities/job.entity';
import { Association } from 'src/associations/entities/association.entity';

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
  industry_id: number;

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

  @OneToMany(() => JobOffer, (jobOffer) => jobOffer.company, {
    eager: true,
    
  })
  jobOffers?: JobOffer[];

  @OneToMany(() => Association, (association) => association.company)
  associations?: Association[];
}
