import type React from "react";
import { ROUTE_PATHS } from "../route.paths";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../shared/store";

type AppProtectedRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export function AppPublicRoute({
  children,
  redirectTo = ROUTE_PATHS.dashboard.root,
}: AppProtectedRouteProps) {
  const isSessionExpired = useAppSelector(
    (state) => state.authSession.isSessionExpired,
  );
  if (!isSessionExpired) {
    return <Navigate to={redirectTo} replace={true} />;
  }
  return <>{children}</>;
}
