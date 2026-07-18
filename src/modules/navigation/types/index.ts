import type { ReactNode } from "react";
import type { IconType } from "react-icons/lib";
import type { AuthPermission } from "../../auth/types/permissions";
import type { AuthRole } from "../../auth/types/roles";

interface NavigationItemInterface {
  title: string;
  icon: IconType;
  path: string | Function;
  permissions?: AuthPermission[];
  roles?: AuthRole[];
  isAvailable?: boolean;
}

export interface NavigationGroup {
  label?: string;
  items: NavigationItemInterface[];
  permissions?: AuthPermission[];
  roles?: AuthRole[];
}

export interface RouteConfig {
  path: string;
  title: string;
  element: ReactNode;
  children?: RouteConfig[];
  permissions?: AuthPermission[];
  roles?: AuthRole[];
}
