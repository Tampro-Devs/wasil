import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import AuthServices from "../services/api.services";
import { ROUTE_PATHS } from "../../router/route.paths";
import { triggerToast } from "../../../utils/globals";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  defaultPasswordUpdateValues,
  passwordUpdateSchema,
  type PasswordUpdateFormValues,
} from "../schema/password.update.form.schema";
import { AppFormProvider } from "../../../shared/components/form";
import { FiLock, FiEyeOff, FiEye } from "react-icons/fi";
import { AppTextField } from "../../../shared/components/form/fields/app.text.field";
import { useEffect, useState } from "react";
import { AppSubmitButton } from "../../../shared/components/app.button";
import { useAppSelector } from "../../../shared/store";

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.authSession.token);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<PasswordUpdateFormValues>({
    resolver: zodResolver(passwordUpdateSchema),
    defaultValues: defaultPasswordUpdateValues,
  });

  const passwordUpdateMutation = useMutation({
    mutationFn: AuthServices.updatePassword,
    onSuccess: (response) => {
      const responseData = response.data;

      const responseCode = responseData.responseCode;
      const message = responseData.message;
      if (responseCode === 0) {
        triggerToast(message, "success");
        navigate(ROUTE_PATHS.auth.signIn, { replace: true });
      } else {
        triggerToast(message, "error");
      }
    },
    onError: (error) => {
      triggerToast(error.message, "error");
    },
  });

  useEffect(() => {
    if (!token) return;
    form.setValue("token", token);
  }, [token]);

  const onSubmit: SubmitHandler<PasswordUpdateFormValues> = async (data) => {
    await passwordUpdateMutation.mutateAsync(data);
  };

  return (
    <AppFormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <AppTextField
          control={form.control}
          type={showPassword ? "text" : "password"}
          name="curr_password"
          label="Current Password"
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
        <AppTextField
          control={form.control}
          type={showPassword ? "text" : "password"}
          name="new_password"
          label="New Password"
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
        <AppTextField
          control={form.control}
          type={showPassword ? "text" : "password"}
          name="confirm_new_password"
          label="Confirm"
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
        <AppSubmitButton
          label="Update"
          loading={passwordUpdateMutation.isPending}
        />
      </form>
    </AppFormProvider>
  );
}
