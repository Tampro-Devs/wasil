import z from "zod";

export const roleSchema = z.object({
  name: z.string().trim().nonempty("You must provide role name"),
  role_id: z.string().trim().optional(),
});

export type RoleFormValues = z.infer<typeof roleSchema>;

export const defaultRoleValues: RoleFormValues = {
  name: "",
  role_id: "",
};
