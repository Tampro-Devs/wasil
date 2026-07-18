export const AUTH_ROLES = {
  ADMIN: "Admin",
  SUPER_ADMIN: "Super Admin",
};

export type AuthRole = (typeof AUTH_ROLES)[keyof typeof AUTH_ROLES];
