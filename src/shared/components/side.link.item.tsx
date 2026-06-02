import { cn } from "../../utils/cn";

interface SideLinkItemProps {
  text: string;
  className?: string;
  isActive: boolean;
  onClick: () => void;
}

export default function SideLinkItem({
  text,
  isActive,
  onClick,
  className,
}: SideLinkItemProps) {
  return (
    <div
      className={cn(
        `px-2 rounded-full border border-slate-300 cursor-pointer hover:bg-slate-200 ${isActive && "bg-slate-300 hover:bg-slate-300"} transition-colors duration-300`,
        className,
      )}
      onClick={onClick}
    >
      <span className="text-slate-500 text-xs font-bold">{text}</span>
    </div>
  );
}
