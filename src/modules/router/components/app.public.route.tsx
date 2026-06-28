import type React from "react";
import { ROUTE_PATHS } from "../route.paths";
import { Navigate } from "react-router-dom";

type AppProtectedRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export function AppPublicRoute({
  children,
  redirectTo = ROUTE_PATHS.dashboard.root,
}: AppProtectedRouteProps) {
  const isAuthenticated = false;
  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace={true} />;
  }
  return <>{children}</>;
}
