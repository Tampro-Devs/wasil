import { z } from "zod";

export const passwordUpdateSchema = z
  .object({
    token: z.string().nullable(),
    curr_password: z.string().trim().nonempty("Current Password is required"),
    new_password: z.string().trim().nonempty("New Password is required"),
    confirm_new_password: z
      .string()
      .trim()
      .nonempty("New Password is required"),
  })
  .refine((data) => data.new_password === data.confirm_new_password, {
    message: "Passwords do not match",
    path: ["confirm_new_password"],
  });

export type PasswordUpdateFormValues = z.infer<typeof passwordUpdateSchema>;

export const defaultPasswordUpdateValues: PasswordUpdateFormValues = {
  token: "",
  curr_password: "",
  new_password: "",
  confirm_new_password: "",
};
