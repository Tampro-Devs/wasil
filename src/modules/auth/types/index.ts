import type { Role } from "../../configs/types/role.type";

export interface User {
  user_id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  access_token: string;
  refresh_token: string;
  roles: Role[];
}
