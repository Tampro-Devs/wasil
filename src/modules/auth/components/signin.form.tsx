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
import { useMutation } from "@tanstack/react-query";
import { authenticate } from "../services/api.services";
import { triggerToast } from "../../../utils/globals";
import type { User } from "../types";
import { useDispatch } from "react-redux";
import { signIn } from "../services/reducers/auth.session.slice";

export default function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signInMutation = useMutation({
    mutationFn: authenticate,
    onSuccess: (response) => {
      const responseData = response.data;

      const responseCode = responseData.responseCode;
      if (responseCode === 0) {
        const user = responseData.data as User;
        dispatch(signIn(user));
        navigate(ROUTE_PATHS.dashboard.root, { replace: true });
      } else {
        const message = responseData.message;
        triggerToast(message, "error");
      }
    },
    onError: (error) => {
      triggerToast(error.message, "error");
    },
  });

  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    await signInMutation.mutateAsync(data);
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
