import type { Role } from "./role.type";

export interface User {
  user_id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  roles: Role[];
}
