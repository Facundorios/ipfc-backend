import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';
import { ValidRoles } from '../interfaces/valid-roles.interfaces';

@Entity({ name: 'users' })
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
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
  role: ValidRoles;

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
  password: string
}

@Entity()
export class Student extends User {
  
}