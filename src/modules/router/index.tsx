import SignInPage from "../auth/pages/signin.page";
import EducationConfigPage from "../configs/pages/education.config.page";
import LocationsConfigPage from "../configs/pages/location.config.page";
import RolesConfigPage from "../configs/pages/roles.config.page";
import DashboardPage from "../dashboard/pages";
import FinanceMainPage from "../finance/pages";
import ContributionMainPage from "../finance/pages/contribution.page";
import MembersMainPage from "../members/pages";
import MemberPreviewPage from "../members/pages/member.preview";
import MemberRegistrationPage from "../members/pages/member.registration.page";
import AppLayout from "../navigation/components/app.layout";
import type { RouteConfig } from "../navigation/types";
import OrganizationMainPage from "../organization/pages";
import BranchMainPage from "../organization/pages/branches";
import BranchOnboardingPage from "../organization/pages/branches/branch.onboard";
import BranchPreview from "../organization/pages/branches/branch.preview";
import LeadershipMainPage from "../organization/pages/leadership";
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
      // Dashboard
      {
        title: "Dashboard",
        path: ROUTE_PATHS.dashboard.root,
        element: <DashboardPage />,
      },

      // Organization
      {
        title: "Organization",
        path: ROUTE_PATHS.organisation.root,
        element: <OrganizationMainPage />,
      },
      {
        title: "Leadership",
        path: ROUTE_PATHS.organisation.leadership.root,
        element: <LeadershipMainPage />,
      },

      // Branches
      {
        title: "Branches",
        path: ROUTE_PATHS.organisation.branches.root,
        element: <BranchMainPage />,
      },

      {
        title: "Preview Branch",
        path: `${ROUTE_PATHS.organisation.branches.root}/:branchId`,
        element: <BranchPreview />,
      },

      {
        title: "Onboard Branch",
        path: `${ROUTE_PATHS.organisation.branches.onboard}/`,
        element: <BranchOnboardingPage />,
      },

      // Members
      {
        title: "Members",
        path: ROUTE_PATHS.membership.members.root,
        element: <MembersMainPage />,
      },

      {
        title: "Preview Member",
        path: `${ROUTE_PATHS.membership.members.root}/:memberId`,
        element: <MemberPreviewPage />,
      },

      {
        title: "Member Registration",
        path: `${ROUTE_PATHS.membership.members.register}`,
        element: <MemberRegistrationPage />,
      },

      // Finance
      {
        title: "Finance",
        path: ROUTE_PATHS.finance.finance.root,
        element: <FinanceMainPage />,
      },
      {
        title: "Contribution",
        path: ROUTE_PATHS.finance.finance.contribution,
        element: <ContributionMainPage />,
      },

      // Configs
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
