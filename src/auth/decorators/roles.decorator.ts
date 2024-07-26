import { SetMetadata } from '@nestjs/common';
import { ValidRoles } from '../interfaces';

export const ROLES_KEY = 'roles';
export const Roles = (role: ValidRoles) => SetMetadata(ROLES_KEY, role);
