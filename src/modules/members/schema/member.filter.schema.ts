import { z } from "zod";

export const memberFilterSchema = z.object({
  name: z.string().trim(),
  region: z.string().trim(),
  district: z.string().trim(),
  ward: z.string().trim(),
  street: z.string().trim(),
});

export type MemberFilterFormValues = z.infer<typeof memberFilterSchema>;

export const defaultMemberFilterValues: MemberFilterFormValues = {
  name: "",
  region: "",
  district: "",
  ward: "",
  street: "",
};
