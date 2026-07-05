import z from "zod";

export const userSchema = z.object({
  name: z.string().trim().nonempty("You must select user"),
  role: z.string().trim().nonempty("You must select role"),
});

export type UserFormValues = z.infer<typeof userSchema>;

export const defaultUserValues: UserFormValues = {
  name: "",
  role: "",
};
