import { useForm, type SubmitHandler } from "react-hook-form";
import {
  defaultSignInValues,
  signinSchema,
  type SignInFormValues,
} from "../form.schema/signing.form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../router/route.paths";
import Button from "../../../shared/components/button";

export default function SignInForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    defaultValues: defaultSignInValues,
    resolver: zodResolver(signinSchema),
  });

  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
    navigate(ROUTE_PATHS.dashboard.root, { replace: true });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-3">
        <label className="text-slate-500">Email</label>
        <input
          {...register("email")}
          type="text"
          placeholder="your@email.com"
          className="border border-slate-500 rounded-sm h-8 px-1"
        />
        {errors.email && (
          <span className="text-red-400">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col mb-3">
        <label className="text-slate-500">Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="***********"
          className="border border-slate-500 rounded-sm h-8 px-1"
        />
        {errors.password && (
          <span className="text-red-400">{errors.password.message}</span>
        )}
      </div>
      <Button type="submit" size="sm" loading={isSubmitting}>
        {isSubmitting ? "Loading..." : "Sign In"}
      </Button>
    </form>
  );
}
