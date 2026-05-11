interface LinkItemProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

export default function ConfigLinkItem({
  text,
  isActive,
  onClick,
}: LinkItemProps) {
  return (
    <div
      className={`px-2 rounded-full border border-slate-300 m-2 cursor-pointer hover:bg-slate-200 ${isActive && "bg-slate-300 hover:bg-slate-300"} transition-colors duration-300`}
      onClick={onClick}
    >
      <span className="text-slate-500 text-xs font-bold">{text}</span>
    </div>
  );
}
