import StatCard from "../components/stat.card";
import { Building2, CreditCard, UsersRound } from "lucide-react";
import DashboardFilter from "../components/dashboard.filter";
import DashboardEvents from "../components/dashboard.events";
import {
  DashboardAcquisitionTable,
  DashboardContributionTable,
} from "../components/dashboard.tables";
import { setPageTitle } from "../../../utils/general_hooks";

export default function DashboardPage() {
  setPageTitle("Overview");

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
