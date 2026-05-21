import type { LucideIcon } from "lucide-react";
import type React from "react";

export type AppError = {
  title?: string;
  message?: string;
  Icon?: LucideIcon;
  Action?: React.ReactNode;
};
