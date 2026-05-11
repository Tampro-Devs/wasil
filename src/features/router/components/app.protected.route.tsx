import type React from "react";
import { ROUTE_PATHS } from "../route.paths";
import { Navigate } from "react-router-dom";

type AppProtectedRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export function AppProtectedRoute({
  children,
  redirectTo = ROUTE_PATHS.auth.signIn,
}: AppProtectedRouteProps) {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace={true} />;
  }
  return <>{children}</>;
}
