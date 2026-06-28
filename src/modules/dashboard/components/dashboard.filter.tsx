import { SlidersHorizontal } from "lucide-react";
import { AppSubmitButton } from "../../../shared/components/app.button";
import { AppForm } from "../../../shared/components/app.form";
import {
  dashboardFilterSchema,
  defaultDashboardFilterValues,
  type DashboardFilterScheamValues,
} from "../schema/dashboard.filter.schema";
import { AppSelectField } from "../../../shared/components/app.form.fields";
import { districts, streets, wards } from "../../configs/data";
import { branches } from "../../organization/types/branch.type";
import DatePicker from "../../../shared/components/app.date.picker";

export default function DashboardFilter() {
  return (
    <div className="flex flex-col gap-3 bg-white/80 p-3 rounded-xl">
      <div className="flex text-slate-400 gap-1">
        <SlidersHorizontal size={18} />
        <h1 className="font-bold text-sm">Filters</h1>
      </div>
      <AppForm<DashboardFilterScheamValues>
        schema={dashboardFilterSchema}
        defaultValues={defaultDashboardFilterValues}
        onSubmit={() => {}}
      >
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-5 lg:flex-col lg:gap-0">
          <div className="flex-1">
            <AppSelectField<DashboardFilterScheamValues>
              name="branch"
              placeholder="Select Branch"
              options={branches}
            />
          </div>
          <div className="flex-1">
            <AppSelectField<DashboardFilterScheamValues>
              name="district"
              placeholder="Select District"
              options={districts}
            />
          </div>
        </div>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-5 lg:flex-col lg:gap-0">
          <div className="flex-1">
            <AppSelectField<DashboardFilterScheamValues>
              name="ward"
              placeholder="Select Wards"
              options={wards}
            />
          </div>
          <div className="flex-1">
            <AppSelectField<DashboardFilterScheamValues>
              name="street"
              placeholder="Select Street"
              options={streets}
            />
          </div>
        </div>
        <div className="flex gap-5 lg:flex-col lg:gap-0">
          <div className="flex-1">
            <DatePicker<DashboardFilterScheamValues>
              placeholder="Select Start Date"
              name="startDate"
            />
          </div>
          <div className="flex-1">
            <DatePicker<DashboardFilterScheamValues>
              placeholder="Select End Date"
              name="endDate"
            />
          </div>
        </div>
        <AppSubmitButton label="Submit" className="lg:w-full" />
      </AppForm>
    </div>
  );
}
