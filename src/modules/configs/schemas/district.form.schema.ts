import z from "zod";

export const districtSchema = z.object({
  region: z.string().trim().nonempty("You must select Region"),
  name: z.string().trim().nonempty("You must provide district name"),
});

export type DistrictFormValues = z.infer<typeof districtSchema>;

export const defaultDistrictValues: DistrictFormValues = {
  name: "",
  region: "",
};

export const districtFormFilterSchema = z.object({
  region: z.string().trim().nonempty("You must select Region"),
});

export type DistrictFormFilterValues = z.infer<typeof districtFormFilterSchema>;

export const defaultDistrictFormFilterValues: DistrictFormFilterValues = {
  region: "",
};
