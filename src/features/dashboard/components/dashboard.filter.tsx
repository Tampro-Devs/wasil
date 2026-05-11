import { SlidersHorizontal } from "lucide-react";
import Button from "../../../components/ui/button";

export default function DashboardFilter() {
  return (
    <div className="flex flex-col gap-3 bg-white/80 p-3 rounded-xl">
      <div className="flex text-slate-400 gap-1">
        <SlidersHorizontal size={18} />
        <h1 className="font-bold text-sm">Filters</h1>
      </div>
      <div className="flex flex-col gap-3">
        <input
          className="bg-slate-400/30 p-2 rounded-xl text-sm"
          placeholder="Select Branch"
        />
        <input
          className="bg-slate-400/30 p-2 rounded-xl text-sm"
          placeholder="Select District"
        />
        <input
          className="bg-slate-400/30 p-2 rounded-xl text-sm"
          placeholder="Select Ward"
        />
        <input
          className="bg-slate-400/30 p-2 rounded-xl text-sm"
          placeholder="Select Street"
        />
        <Button>Submit</Button>
      </div>
    </div>
  );
}
