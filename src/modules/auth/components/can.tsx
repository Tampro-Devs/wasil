import { useAuth } from "../context/auth.context";
import type { AuthPermission } from "../types/permissions";
import type { AuthRole } from "../types/roles";

interface CanProps {
  roles?: AuthRole[];
  permissions?: AuthPermission[];
  mode?: "any" | "all";
  children: React.ReactNode;
  require?: "and" | "or";
}

export function Can({
  permissions,
  roles,
  require = "or",
  mode = "any",
  children,
}: CanProps) {
  if (!permissions && !roles) return <>{children}</>;
  const { hasAnyPermission, hasAllPermissions, hasAnyRole, hasAllRoles } =
    useAuth();

  const isPermissionAllowed =
    mode === "all"
      ? hasAllPermissions(permissions ?? [])
      : hasAnyPermission(permissions ?? []);

  const isRoleAllowed =
    mode === "all" ? hasAllRoles(roles ?? []) : hasAnyRole(roles ?? []);

  const allowed =
    require === "or"
      ? isRoleAllowed || isPermissionAllowed
      : isRoleAllowed && isPermissionAllowed;

  return allowed ? <>{children}</> : null;
}
