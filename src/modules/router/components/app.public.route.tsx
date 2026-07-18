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
  // redirectTo = ROUTE_PATHS.dashboard.root,
}: AppProtectedRouteProps) {
  const user = useAppSelector((state) => state.authSession.user);

  if (user) {
    return (
      <Navigate
        to={ROUTE_PATHS.membership.myMembership.preview(user)}
        replace={true}
      />
    );
  }
  return <>{children}</>;
}
