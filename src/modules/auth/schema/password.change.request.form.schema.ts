import { z } from "zod";

export const passwordChangeRequestSchema = z.object({
  email: z.email("Use valid email format").trim().nonempty("Email is required"),
});

export type PasswordChangeRequestFormValues = z.infer<
  typeof passwordChangeRequestSchema
>;

export const defaultPasswordChangeRequestValues: PasswordChangeRequestFormValues =
  {
    email: "",
  };
