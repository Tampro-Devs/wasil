import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  defaultPasswordChangeRequestValues,
  passwordChangeRequestSchema,
  type PasswordChangeRequestFormValues,
} from "../schema/password.change.request.form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import AuthServices from "../services/api.services";
import { ROUTE_PATHS } from "../../router/route.paths";
import { triggerToast } from "../../../utils/globals";
import { AppFormProvider } from "../../../shared/components/form";
import { AppTextField } from "../../../shared/components/form/fields/app.text.field";
import { FiMail } from "react-icons/fi";
import { AppSubmitButton } from "../../../shared/components/app.button";

export default function PasswordChangeRequestForm() {
  const navigate = useNavigate();

  const form = useForm<PasswordChangeRequestFormValues>({
    resolver: zodResolver(passwordChangeRequestSchema),
    defaultValues: defaultPasswordChangeRequestValues,
  });

  const changeRequestMutation = useMutation({
    mutationFn: AuthServices.requestPasswordChange,
    onSuccess: (response) => {
      const responseData = response.data;

      const responseCode = responseData.responseCode;
      const message = responseData.message;
      if (responseCode === 0) {
        triggerToast(message, "success");
        navigate(ROUTE_PATHS.dashboard.root, { replace: true });
      } else {
        triggerToast(message, "error");
      }
    },
    onError: (error) => {
      triggerToast(error.message, "error");
    },
  });

  const onSubmit: SubmitHandler<PasswordChangeRequestFormValues> = async (
    data,
  ) => {
    await changeRequestMutation.mutateAsync(data);
  };

  return (
    <AppFormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <AppTextField
          control={form.control}
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          LeadingIcon={<FiMail className="h-5 w-5 shrink-0 text-gray-400" />}
        />

        <AppSubmitButton
          label="Send Request"
          loading={changeRequestMutation.isPending}
        />
      </form>
    </AppFormProvider>
  );
}
