import { z } from "zod";

export const memberFilterSchema = z.object({
  name: z.string().trim().nullable(),
  branch: z.string().trim().nullable(),
  district: z.string().trim().nullable(),
  ward: z.string().trim().nullable(),
  street: z.string().trim().nullable(),
});

export type MemberFilterFormValues = z.infer<typeof memberFilterSchema>;

export const defaultMemberFilterValues: MemberFilterFormValues = {
  name: "",
  branch: "",
  district: "",
  ward: "",
  street: "",
};
