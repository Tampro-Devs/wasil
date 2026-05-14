import z from "zod";

export const regionSchema = z.object({
  name: z.string().trim().nonempty("You must provide region name"),
});

export type RegionFormValues = z.infer<typeof regionSchema>;

export const defaultRegionValues: RegionFormValues = {
  name: "",
};
