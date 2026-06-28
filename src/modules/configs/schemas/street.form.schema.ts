import z from "zod";

export const streetSchema = z.object({
  region: z.string().trim().nonempty("You must select Region"),
  district: z.string().trim().nonempty("You must select District"),
  ward: z.string().trim().nonempty("You must select Ward"),
  name: z.string().trim().nonempty("You must provide street name"),
});

export type StreetFormValues = z.infer<typeof streetSchema>;

export const defaultStreetValues: StreetFormValues = {
  name: "",
  region: "",
  district: "",
  ward: "",
};
