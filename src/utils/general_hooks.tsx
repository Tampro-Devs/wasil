import { useEffect } from "react";
import { usePageHeader } from "../modules/navigation/context/page.header.provider";
import type { AuthPermission } from "../modules/auth/types/permissions";
import { useAuth } from "../modules/auth/context/auth.context";
import type { AuthRole } from "../modules/auth/types/roles";

export function setPageHeader(
  title: string,
  backText?: string,
  permissions?: AuthPermission[],
  roles?: AuthRole[],
  mode: "any" | "all" = "any",
  require: "and" | "or" = "or",
) {
  const { setPageTitle, setBackText } = usePageHeader();

  const { hasAnyPermission, hasAllPermissions, hasAnyRole, hasAllRoles } =
    useAuth();

  useEffect(() => {
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

    setPageTitle({ text: title });
    if (allowed) {
      setBackText({ text: backText });
    } else {
      setBackText({ text: undefined });
    }
  }, []);
}
