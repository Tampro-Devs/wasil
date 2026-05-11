import { shortenNumber } from "../../../utils/globals";

interface StatInfo {
  title: string;
  Icon: React.ElementType;
  statValue: number;
}

export default function StatCard({ title, Icon, statValue }: StatInfo) {
  return (
    <div className="bg-white/80 p-3 rounded-xl">
      <div className="flex flex-col gap-5 text-gray-600">
        <div className="flex justify-between">
          <Icon className="text-gray-800" />
          <span
            className={`flex items-center justify-center size-4 rounded-full border text-gray-400`}
          ></span>
        </div>
        <span className="text-xl">{shortenNumber(statValue)}</span>
        <span className="text-xs">{title}</span>
      </div>
    </div>
  );
}
