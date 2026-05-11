import SignInPage from "../auth/pages/signin.page";
import EducationConfigPage from "../configs/pages/education.config.page";
import LocationsConfigPage from "../configs/pages/location.config.page";
import RolesConfigPage from "../configs/pages/roles.config.page";
import DashboardPage from "../dashboard/pages";
import AppLayout from "../navigation/components/app.layout";
import type { RouteConfig } from "../navigation/types";
import { AppProtectedRoute } from "./components/app.protected.route";
import { AppPublicRoute } from "./components/app.public.route";
import { ROUTE_PATHS } from "./route.paths";

export const router: RouteConfig[] = [
  {
    title: "Sign In",
    path: ROUTE_PATHS.auth.signIn,
    element: (
      <AppPublicRoute>
        <SignInPage />
      </AppPublicRoute>
    ),
  },
  {
    title: "Dashboard",
    path: ROUTE_PATHS.dashboard.root,
    element: (
      <AppProtectedRoute>
        <AppLayout />
      </AppProtectedRoute>
    ),
    children: [
      {
        title: "Dashboard",
        path: ROUTE_PATHS.dashboard.root,
        element: <DashboardPage />,
      },
      {
        title: "Roles",
        path: ROUTE_PATHS.configs.roles.root,
        element: <RolesConfigPage />,
      },
      {
        title: "Locations",
        path: ROUTE_PATHS.configs.locations.root,
        element: <LocationsConfigPage />,
      },
      {
        title: "Education",
        path: ROUTE_PATHS.configs.education.root,
        element: <EducationConfigPage />,
      },
    ],
  },
];
