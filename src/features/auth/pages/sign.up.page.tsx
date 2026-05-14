import { z } from "zod";
import {
  AppForm,
  useAppFormContext,
} from "../../../shared/components/app.form";
import {
  AppSelectField,
  AppTextField,
  CheckboxField,
} from "../../../shared/components/app.form.fields";

// ─── 1. Define your schema ────────────────────────────────────────────────
//       TypeScript types are inferred automatically — no duplication.

const signupSchema = z
  .object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain an uppercase letter")
      .regex(/[0-9]/, "Must contain a number"),
    confirmPassword: z.string(),
    role: z.enum(["admin", "editor", "viewer"], {
      error: "Please select a role", // ← same change
    }),
    acceptTerms: z.literal(true, {
      error: "You must accept the terms", // ← errorMap → error, plain string
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // attach error to this field
  });

// Infer the TS type from the schema — single source of truth
export type SignupFormValues = z.infer<typeof signupSchema>;

// ─── 2. Submit button — reads form state from context ────────────────────

function SubmitButton() {
  const form = useAppFormContext<SignupFormValues>();
  const { isSubmitting, isValid, isDirty } = form.formState;

  return (
    <button
      type="submit"
      disabled={isSubmitting || (!isValid && isDirty)}
      className="submit-btn"
    >
      {isSubmitting ? "Creating account…" : "Create Account"}
    </button>
  );
}

// ─── 3. Compose the form ──────────────────────────────────────────────────

export function SignupForm() {
  async function onSubmit(values: SignupFormValues) {
    // `values` is fully typed — TypeScript knows every field
    console.log("Form submitted:", values);
    await new Promise((r) => setTimeout(r, 1500)); // simulate API call
    alert(`Welcome, ${values.fullName}!`);
  }

  return (
    <AppForm<SignupFormValues>
      schema={signupSchema}
      defaultValues={{
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "viewer",
        // acceptTerms intentionally omitted to start unchecked
      }}
      onSubmit={onSubmit}
      className="signup-form"
    >
      <h2 className="form-title">Create your account</h2>

      <AppTextField<SignupFormValues>
        name="fullName"
        label="Full name"
        placeholder="Jane Smith"
      />

      <AppTextField<SignupFormValues>
        name="email"
        label="Email address"
        type="email"
        placeholder="jane@example.com"
      />

      <AppTextField<SignupFormValues>
        name="password"
        label="Password"
        type="password"
        placeholder="Min 8 chars, 1 uppercase, 1 number"
      />

      <AppTextField<SignupFormValues>
        name="confirmPassword"
        label="Confirm password"
        type="password"
      />

      <AppSelectField<SignupFormValues>
        name="role"
        label="Role"
        placeholder="Select a role…"
        options={[
          { value: "admin", label: "Admin" },
          { value: "editor", label: "Editor" },
          { value: "viewer", label: "Viewer" },
        ]}
      />

      <CheckboxField<SignupFormValues>
        name="acceptTerms"
        label="I accept the terms and conditions"
      />

      <SubmitButton />
    </AppForm>
  );
}
