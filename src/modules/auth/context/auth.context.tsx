import { createContext, useContext } from "react";
import type { UserData } from "../types";
import type React from "react";
import { useAppSelector } from "../../../shared/store";
import type { AuthPermission } from "../types/permissions";
import type { AuthRole } from "../types/roles";

type AuthContextType = {
  user: UserData | null;
  hasRole: (role: AuthRole) => boolean;
  hasAnyRole: (roles: AuthRole[]) => boolean;
  hasAllRoles: (roles: AuthRole[]) => boolean;
  hasPermission: (permission: AuthPermission) => boolean;
  hasAnyPermission: (permissions: AuthPermission[]) => boolean;
  hasAllPermissions: (permissions: AuthPermission[]) => boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const user = useAppSelector((state) => state.authSession.user);

  const hasPermission = (permission: AuthPermission) => {
    return user?.permissions.includes(permission) ?? false;
  };

  const hasAnyPermission = (permissions: AuthPermission[]) => {
    return permissions.some((p) => user?.permissions.includes(p));
  };

  const hasAllPermissions = (permissions: AuthPermission[]) => {
    return permissions.every((p) => user?.permissions.includes(p));
  };

  const hasRole = (role: AuthRole) => user?.roles.includes(role) ?? false;

  const hasAnyRole = (roles: AuthRole[]) =>
    roles.some((role) => user?.roles.includes(role));

  const hasAllRoles = (roles: AuthRole[]) =>
    roles.every((role) => user?.roles.includes(role));

  return (
    <AuthContext.Provider
      value={{
        user,
        hasPermission,
        hasAnyPermission,
        hasAllPermissions,
        hasRole,
        hasAnyRole,
        hasAllRoles,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
