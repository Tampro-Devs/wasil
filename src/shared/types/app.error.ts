import type React from "react";
import type { IconType } from "react-icons/lib";

export type AppError = {
  title?: string;
  message?: string;
  Icon?: IconType;
  Action?: React.ReactNode;
};
