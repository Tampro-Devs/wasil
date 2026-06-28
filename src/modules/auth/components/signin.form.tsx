import { type SubmitHandler } from "react-hook-form";
import {
  defaultSignInValues,
  signinSchema,
  type SignInFormValues,
} from "../schema/signing.form.schema";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../router/route.paths";
import { AppForm } from "../../../shared/components/app.form";
import { AppTextField } from "../../../shared/components/app.form.fields";
import { AppSubmitButton } from "../../../shared/components/app.button";

export default function SignInForm() {
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
    navigate(ROUTE_PATHS.dashboard.root, { replace: true });
  };
  return (
    <AppForm<SignInFormValues>
      schema={signinSchema}
      defaultValues={defaultSignInValues}
      onSubmit={onSubmit}
    >
      <AppTextField<SignInFormValues>
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your login email"
      />
      <AppTextField<SignInFormValues>
        type="password"
        name="password"
        label="Password"
        placeholder="*************"
      />
      <AppSubmitButton<SignInFormValues> label="Sign In" />
    </AppForm>
  );
}
