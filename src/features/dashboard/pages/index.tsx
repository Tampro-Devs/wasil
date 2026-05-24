import { Building2, CreditCard, UsersRound } from "lucide-react";
import DashboardFilter from "../components/dashboard.filter";
import DashboardEvents from "../components/dashboard.events";
import {
  DashboardAcquisitionTable,
  DashboardContributionTable,
} from "../components/dashboard.tables";
import { setPageHeader } from "../../../utils/general_hooks";
import { shortenNumber } from "../../../utils/globals";

export default function DashboardPage() {
  setPageHeader("Overview");

  return (
    <div className="mt-3 flex gap-5">
      <div className="flex-2 flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-5">
          <StatCard
            title="Member Acquisition"
            statValue={100}
            Icon={UsersRound}
          />
          <StatCard
            title="Total Contribution"
            statValue={100000}
            Icon={CreditCard}
          />
          <StatCard title="Active Branches" statValue={1} Icon={Building2} />
        </div>
        <DashboardAcquisitionTable />
        <DashboardContributionTable />
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-5">
          <DashboardFilter />
          <DashboardEvents />
        </div>
      </div>
    </div>
  );
}

interface StatInfo {
  title: string;
  Icon: React.ElementType;
  statValue: number;
}

function StatCard({ title, Icon, statValue }: StatInfo) {
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
