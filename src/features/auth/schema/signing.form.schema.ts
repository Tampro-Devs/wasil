import { z } from "zod";

export const signinSchema = z.object({
  email: z.email("Use valid email format").trim().nonempty("Email is required"),
  password: z.string().trim().nonempty("Password is required"),
});

export type SignInFormValues = z.infer<typeof signinSchema>;

export const defaultSignInValues: SignInFormValues = {
  email: "",
  password: "",
};
