interface Permission {
  id: number;
  name: string;
  codename: string;
  content_type: string;
  is_belong_to_role: boolean;
}

export interface PermissionGroup {
  title: string;
  permissions: Permission[];
}

export interface RolePermissionsValue {
  role_id: string;
  permissions: number[];
}
