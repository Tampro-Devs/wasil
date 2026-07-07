import type { PermissionGroup } from "./permission.type";

export interface Role {
  role_id: string;
  name: string;
  total_permissions: number;
  total_users: number;
  permission_groups: PermissionGroup[] | [];
}
