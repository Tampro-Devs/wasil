import type React from "react";
import { ROUTE_PATHS } from "../route.paths";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../shared/store";
import type { AuthPermission } from "../../auth/types/permissions";
import { useAuth } from "../../auth/context/auth.context";
import type { AuthRole } from "../../auth/types/roles";

type AppProtectedRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
  mode?: "any" | "all";
  require?: "and" | "or";
  permissions?: AuthPermission[];
  roles?: AuthRole[];
};

export function AppProtectedRoute({
  children,
  permissions,
  roles,
  mode = "any",
  require = "or",
  redirectTo = ROUTE_PATHS.auth.signIn,
}: AppProtectedRouteProps) {
  const user = useAppSelector((state) => state.authSession.user);
  const { hasAnyPermission, hasAllPermissions, hasAnyRole, hasAllRoles } =
    useAuth();

  if (!user) {
    return <Navigate to={redirectTo} replace={true} />;
  }

  if (permissions || roles) {
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

    if (!allowed) {
      return (
        <Navigate to={ROUTE_PATHS.dashboard.unauthorised} replace={true} />
      );
    }
  }

  return <>{children}</>;
}
