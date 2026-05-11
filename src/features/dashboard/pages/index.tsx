import { useEffect } from "react";
import { usePageTitle } from "../../navigation/context/page.title.provider";
import StatCard from "../components/stat.card";
import { Building2, CreditCard, UsersRound } from "lucide-react";
import DashboardFilter from "../components/dashboard.filter";
import DashboardEvents from "../components/dashboard.events";

export default function DashboardPage() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    const title = { text: "Overview" };
    setPageTitle(title);
  }, []);

  return (
    <div className="mt-3 flex gap-5">
      <div className="flex-2">
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
