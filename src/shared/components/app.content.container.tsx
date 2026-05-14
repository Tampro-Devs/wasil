import React from "react";
import { cn } from "../../utils/cn";

export default function AppContentContainer({
  title,
  actions,
  children,
  className,
}: {
  title?: string;
  actions?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "border-r p-3 rounded-lg border border-slate-300",
        className,
      )}
    >
      <div className={`${title || actions ? "py-2 flex justify-between" : ""}`}>
        {title && <span>{title}</span>}
        {actions}
      </div>
      {children}
    </div>
  );
}
