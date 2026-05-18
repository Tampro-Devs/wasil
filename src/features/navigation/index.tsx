import {
  BookOpenText,
  BriefcaseConveyorBelt,
  Building,
  LayoutDashboard,
  MapPinHouse,
  ShieldUser,
  University,
  Users,
} from "lucide-react";
import type { NavigationGroup } from "./types";
import { ROUTE_PATHS } from "../router/route.paths";

export const navGroups: NavigationGroup[] = [
  {
    label: "Overview",
    items: [
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: ROUTE_PATHS.dashboard.root,
      },
    ],
  },
  {
    label: "Organization",
    items: [
      {
        title: "Organization",
        icon: Building,
        path: ROUTE_PATHS.organisation.root,
      },
      {
        title: "Leadership",
        icon: BriefcaseConveyorBelt,
        path: ROUTE_PATHS.organisation.leadership.root,
      },
      {
        title: "Branches",
        icon: University,
        path: ROUTE_PATHS.organisation.branches.root,
      },
    ],
  },
  {
    label: "Membership",
    items: [
      {
        title: "Members",
        icon: Users,
        path: ROUTE_PATHS.membership.members.root,
      },
    ],
  },
  {
    label: "Configs",
    items: [
      {
        title: "Roles",
        icon: ShieldUser,
        path: ROUTE_PATHS.configs.roles.root,
      },
      {
        title: "Locations",
        icon: MapPinHouse,
        path: ROUTE_PATHS.configs.locations.root,
      },
      {
        title: "Education",
        icon: BookOpenText,
        path: ROUTE_PATHS.configs.education.root,
      },
    ],
  },
];
