import { Perfil } from './perfil';

export interface User {
  id?: number;
  name?: string;
  lastName?: string;
  username?: string;
  phone?: string;
  isActive?: boolean;
  profiles?: Perfil[];
  password?: string;
  initialDate?: Date;
  updateDate?: Date;
}
