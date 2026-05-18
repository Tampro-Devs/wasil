import React from "react";
import { cn } from "../../utils/cn";

interface AppContentProps extends React.ComponentProps<"div"> {
  className?: string;
}

export function AppContentContainer({ className, ...props }: AppContentProps) {
  return (
    <div
      className={cn(
        "border-r p-3 rounded-lg border border-slate-300",
        className,
      )}
      {...props}
    />
  );
}

interface AppContentHeaderProps extends React.ComponentProps<"div"> {
  title?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export function AppContentHeader({
  title,
  actions,
  className,
  children,
  ...props
}: AppContentHeaderProps) {
  return (
    <div className={cn("py-2 flex justify-between", className)} {...props}>
      {children ? (
        children
      ) : (
        <>
          <div className="flex flex-col">
            {title && <span className="font-bold">{title}</span>}
          </div>
          <span>{actions}</span>
        </>
      )}
    </div>
  );
}

export function AppContentBody({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col", className)} {...props} />;
}
