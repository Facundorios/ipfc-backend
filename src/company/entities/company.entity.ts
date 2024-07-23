import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true
  })
  name: string;

  @Column()
  description: string;

  @Column()
  industry_Id: number;

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
}
