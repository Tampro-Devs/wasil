import { cn } from "../../../utils/cn";

export default function StatusContainer({ status }: { status: number }) {
  const configs = getColorConfigs(status);

  return (
    <div
      className={cn(
        "w-fit px-3 rounded-full text-center text-xs",
        configs.bg,
        configs.fore,
      )}
    >
      {configs.label}
    </div>
  );
}

function getColorConfigs(status: number) {
  if (status == 1) {
    return {
      bg: "bg-emerald-200/50",
      fore: "text-emerald-500",
      label: "Active",
    };
  } else if (status == 2) {
    return {
      bg: "bg-red-200/50",
      fore: "text-red-500",
      label: "Suspended",
    };
  } else {
    return {
      bg: "bg-slate-200/70",
      fore: "text-slate-500",
      label: "Pending",
    };
  }
}
