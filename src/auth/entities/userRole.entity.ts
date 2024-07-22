import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ValidRoles } from '../interfaces/valid-roles.interfaces';

@Entity({ name: 'roles' })
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    unique: true,
  })
  role: ValidRoles;

  @BeforeInsert()
  checkValidRole() {
    if (!Object.values(ValidRoles).includes(this.role)) {
      throw new Error(`Invalid role: ${this.role}`);
    }
  } 
}
