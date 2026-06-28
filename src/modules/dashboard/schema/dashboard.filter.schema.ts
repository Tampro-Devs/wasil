import z from "zod";

export const dashboardFilterSchema = z.object({
  branch: z.string().trim(),
  district: z.string().trim(),
  ward: z.string().trim(),
  street: z.string().trim(),
  startDate: z.string().trim(),
  endDate: z.string().trim(),
});

export type DashboardFilterScheamValues = z.infer<typeof dashboardFilterSchema>;

export const defaultDashboardFilterValues: DashboardFilterScheamValues = {
  branch: "",
  district: "",
  ward: "",
  street: "",
  startDate: "",
  endDate: "",
};
