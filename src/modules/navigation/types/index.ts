import type { ReactNode } from "react";
import type { IconType } from "react-icons/lib";

interface NavigationItemInterface {
  title: string;
  icon: IconType;
  path: string;
}

export interface NavigationGroup {
  label?: string;
  items: NavigationItemInterface[];
}

export interface RouteConfig {
  path: string;
  title: string;
  element: ReactNode;
  children?: RouteConfig[];
}
