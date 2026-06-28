import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface NavigationItemInterface {
  title: string;
  icon: LucideIcon;
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
