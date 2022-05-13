import { Perfil } from "./perfil";

export interface UserDto {
  id?: number;
  name?: string;
  lastName?: string;
  username?: string;
  phone?: string;
  isActive?: boolean;
  profiles?: Perfil[];
  initialDate?: Date;
  updateDate?: Date;
}
