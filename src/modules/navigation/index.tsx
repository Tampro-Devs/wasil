import type { NavigationGroup } from "./types";
import { ROUTE_PATHS } from "../router/route.paths";
import {
  LuBookOpenText,
  LuBriefcaseConveyorBelt,
  LuBuilding2,
  LuLayoutDashboard,
  LuMapPinHouse,
  LuUniversity,
  LuUsers,
  LuWallet,
} from "react-icons/lu";
import { LiaUserShieldSolid } from "react-icons/lia";

import { PiMoneyWavy } from "react-icons/pi";

export const navGroups: NavigationGroup[] = [
  {
    label: "Overview",
    items: [
      {
        title: "Dashboard",
        icon: LuLayoutDashboard,
        path: ROUTE_PATHS.dashboard.root,
      },
    ],
  },
  {
    label: "Organization",
    items: [
      {
        title: "Organization",
        icon: LuBuilding2,
        path: ROUTE_PATHS.organisation.root,
      },
      {
        title: "Leadership",
        icon: LuBriefcaseConveyorBelt,
        path: ROUTE_PATHS.organisation.leadership.root,
      },
      {
        title: "Branches",
        icon: LuUniversity,
        path: ROUTE_PATHS.organisation.branches.root,
      },
    ],
  },
  {
    label: "Membership",
    items: [
      {
        title: "Members",
        icon: LuUsers,
        path: ROUTE_PATHS.membership.members.root,
      },
    ],
  },
  {
    label: "Finance",
    items: [
      {
        title: "Finance",
        icon: LuWallet,
        path: ROUTE_PATHS.finance.finance.root,
      },
      {
        title: "Contribution",
        icon: PiMoneyWavy,
        path: ROUTE_PATHS.finance.finance.contribution,
      },
    ],
  },
  {
    label: "Configs",
    items: [
      {
        title: "Roles",
        icon: LiaUserShieldSolid,
        path: ROUTE_PATHS.configs.roles.root,
      },
      {
        title: "Locations",
        icon: LuMapPinHouse,
        path: ROUTE_PATHS.configs.locations.root,
      },
      {
        title: "Education",
        icon: LuBookOpenText,
        path: ROUTE_PATHS.configs.education.root,
      },
    ],
  },
];
