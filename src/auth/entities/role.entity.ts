import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ValidRoles } from '../interfaces/valid-roles.interface';
import { User } from './user.entity';

@Entity({ name: 'role' })
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    unique: true,
  })
  role: ValidRoles;

  @OneToMany(() => User, (user) => user.role)
  users: User[];

  @BeforeInsert()
  checkValidRole() {
    if (!Object.values(ValidRoles).includes(this.role)) {
      throw new Error(`Invalid role: ${this.role}`);
    }
  }
}
