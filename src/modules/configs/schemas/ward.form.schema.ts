import z from "zod";

export const wardSchema = z.object({
  region: z.string().trim().nonempty("You must select Region"),
  district: z.string().trim().nonempty("You must select District"),
  name: z.string().trim().nonempty("You must provide ward name"),
});

export type WardFormValues = z.infer<typeof wardSchema>;

export const defaultWardValues: WardFormValues = {
  name: "",
  region: "",
  district: "",
};

export const wardFilterSchema = z.object({
  region: z.string().trim().nonempty("You must select Region"),
  district: z.string().trim().nonempty("You must select District"),
});

export type WardFilterFormValues = z.infer<typeof wardFilterSchema>;

export const defaultWardFilterValues: WardFilterFormValues = {
  region: "",
  district: "",
};
