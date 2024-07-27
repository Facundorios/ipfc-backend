import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.entity';
import { Association } from 'src/associations/entities/association.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  name: string;

  @Column({
    type: 'text',
  })
  surname: string;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column({
    type: 'text',
  })
  about: string;

  @Column({
    type: 'text',
    nullable: true,
    default:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  })
  profilePicture: string;

  @Column({
    type: 'text',
  })
  password: string;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @OneToMany(()=> Association, (association) => association.user)
  associations: Association[]
}
