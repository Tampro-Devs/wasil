import type React from "react";
import { ROUTE_PATHS } from "../route.paths";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../shared/store";

type AppProtectedRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export function AppProtectedRoute({
  children,
  redirectTo = ROUTE_PATHS.auth.signIn,
}: AppProtectedRouteProps) {
  const user = useAppSelector((state) => state.authSession.user);

  if (!user) {
    return <Navigate to={redirectTo} replace={true} />;
  }
  return <>{children}</>;
}
