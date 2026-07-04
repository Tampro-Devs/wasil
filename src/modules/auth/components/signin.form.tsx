import { useForm, type SubmitHandler } from "react-hook-form";
import {
  defaultSignInValues,
  signinSchema,
  type SignInFormValues,
} from "../schema/signing.form.schema";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../router/route.paths";
import { AppSubmitButton } from "../../../shared/components/app.button";
import { useMutation } from "@tanstack/react-query";
import { triggerToast } from "../../../utils/globals";
import type { User } from "../types";
import { useDispatch } from "react-redux";
import { signIn } from "../services/reducers/auth.session.slice";
import { AppTextField } from "../../../shared/components/form/fields/app.text.field";
import { AppFormProvider } from "../../../shared/components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthServices from "../services/api.services";

export default function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: defaultSignInValues,
  });

  const signInMutation = useMutation({
    mutationFn: AuthServices.authenticate,
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
    <AppFormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AppTextField
          control={form.control}
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your login email"
        />
        <AppTextField
          control={form.control}
          type="password"
          name="password"
          label="Password"
          placeholder="*************"
        />
        <AppSubmitButton
          label="Sign In"
          className="mt-3"
          loading={signInMutation.isPending}
        />
      </form>
    </AppFormProvider>
  );
}
