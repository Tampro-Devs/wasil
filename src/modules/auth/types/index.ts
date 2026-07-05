import type { Role } from "../../users/types/role.type";

export interface UserData {
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
