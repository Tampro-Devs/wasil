import { AppSubmitButton } from "../../../shared/components/app.button";
import {
  dashboardFilterSchema,
  defaultDashboardFilterValues,
  type DashboardFilterScheamValues,
} from "../schema/dashboard.filter.schema";
import { districts, streets, wards } from "../../configs/data";
import { branches } from "../../organization/types/branch.type";
import { LuSlidersHorizontal } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AppFormProvider } from "../../../shared/components/form";
import { AppSelectField } from "../../../shared/components/form/fields/app.select.field";
import { AppDatePicker } from "../../../shared/components/form/fields/date.picker/app.date.picker";

export default function DashboardFilter() {
  const form = useForm<DashboardFilterScheamValues>({
    resolver: zodResolver(dashboardFilterSchema),
    defaultValues: defaultDashboardFilterValues,
  });

  async function onSubmit(data: DashboardFilterScheamValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
  }
  return (
    <div className="flex flex-col gap-3 bg-white/80 p-3 rounded-xl">
      <div className="flex text-slate-400 gap-1">
        <LuSlidersHorizontal size={18} />
        <h1 className="font-bold text-sm">Filters</h1>
      </div>
      <AppFormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-0 sm:flex-row sm:gap-5 lg:flex-col lg:gap-0">
            <div className="flex-1">
              <AppSelectField
                control={form.control}
                name="branch"
                placeholder="Select Branch"
                options={branches}
              />
            </div>
            <div className="flex-1">
              <AppSelectField
                control={form.control}
                name="district"
                placeholder="Select District"
                options={districts}
              />
            </div>
          </div>
          <div className="flex flex-col gap-0 sm:flex-row sm:gap-5 lg:flex-col lg:gap-0">
            <div className="flex-1">
              <AppSelectField
                control={form.control}
                name="ward"
                placeholder="Select Wards"
                options={wards}
              />
            </div>
            <div className="flex-1">
              <AppSelectField
                control={form.control}
                name="street"
                placeholder="Select Street"
                options={streets}
              />
            </div>
          </div>
          <div className="flex gap-5 lg:flex-col lg:gap-0">
            <div className="flex-1">
              <AppDatePicker
                control={form.control}
                placeholder="Select Start Date"
                name="startDate"
              />
            </div>
            <div className="flex-1">
              <AppDatePicker
                control={form.control}
                placeholder="Select End Date"
                name="endDate"
              />
            </div>
          </div>
          <AppSubmitButton label="Submit" className="lg:w-full" />
        </form>
      </AppFormProvider>
    </div>
  );
}
