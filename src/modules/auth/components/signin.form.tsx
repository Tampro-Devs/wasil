import { useForm, type SubmitHandler } from "react-hook-form";
import {
  defaultSignInValues,
  signinSchema,
  type SignInFormValues,
} from "../schema/signing.form.schema";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../router/route.paths";
import { AppSubmitButton } from "../../../shared/components/app.button";
import { useMutation } from "@tanstack/react-query";
import { triggerToast } from "../../../utils/globals";
import { useDispatch } from "react-redux";
import { signIn } from "../services/reducers/auth.session.slice";
import { AppTextField } from "../../../shared/components/form/fields/app.text.field";
import { AppFormProvider } from "../../../shared/components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthServices from "../services/api.services";
import type { UserData } from "../types";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import { useState } from "react";

export default function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

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
        const user = responseData.data as UserData;
        dispatch(signIn(user));
        navigate(ROUTE_PATHS.membership.myMembership.preview(user), {
          replace: true,
        });
        // navigate(ROUTE_PATHS.dashboard.root, { replace: true });
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <div className="flex flex-col gap-5">
          <AppTextField
            control={form.control}
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your login email"
            LeadingIcon={<FiMail className="h-5 w-5 shrink-0 text-gray-400" />}
          />
          <AppTextField
            control={form.control}
            type={showPassword ? "text" : "password"}
            name="password"
            label="Password"
            placeholder="*************"
            LeadingIcon={<FiLock className="h-5 w-5 shrink-0 text-gray-400" />}
            Suffix={
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="shrink-0 text-gray-400 hover:text-gray-600 transition cursor-pointer"
              >
                {showPassword ? (
                  <FiEyeOff className="h-5 w-5" />
                ) : (
                  <FiEye className="h-5 w-5" />
                )}
              </button>
            }
          />
        </div>
        <div className="flex justify-end">
          <NavLink
            to={ROUTE_PATHS.auth.forgotPassword}
            className="text-xs text-[#16224f] hover:underline"
          >
            Forgot password?
          </NavLink>
        </div>
        <AppSubmitButton label="Sign In" loading={signInMutation.isPending} />
      </form>
    </AppFormProvider>
  );
}
