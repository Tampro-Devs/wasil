import React from "react";
import { cn } from "../../utils/cn";
import { useFormState, type FieldValues } from "react-hook-form";
import { useAppFormContext } from "./app.form";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

type ButtonSize = "xs" | "sm" | "md" | "lg";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function AppButton({
  variant = "primary",
  size = "md",
  loading = false,
  className,
  leftIcon,
  rightIcon,
  children,
  ...props
}: AppButtonProps) {
  return (
    <button
      className={cn(
        "btn-base cursor-pointer flex justify-center-safe items-center-safe gap-2",
        variantClasses[variant],
        sizeClasses[size],
        loading && "opacity-60 cursor-not-allowed",
        className,
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {!loading && leftIcon && <span>{leftIcon}</span>}

      <span>{loading ? "Loading..." : children}</span>

      {!loading && rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] shadow-[var(--shadow-soft)]",
  secondary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-light)]",
  outline:
    "border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800",
  ghost: "hover:bg-slate-100 dark:hover:bg-slate-800/10",
  danger: "bg-[var(--error)] text-white hover:opacity-90",
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: "px-1 py-1 text-xs rounded-md",
  sm: "px-3 py-1.5 text-sm rounded-xl",
  md: "px-4 py-2 text-sm rounded-xl",
  lg: "px-6 py-3 text-base rounded-xl",
};

interface SubmitButtonProps extends AppButtonProps {
  label: string;
  className?: string;
}

export function AppSubmitButton<T extends FieldValues>({
  label,
  className,
  size,
}: SubmitButtonProps) {
  const form = useAppFormContext<T>();
  const { isSubmitting, isValid, isDirty } = useFormState({
    control: form.control,
  });

  return (
    <AppButton
      type="submit"
      size={size}
      loading={isSubmitting}
      disabled={isSubmitting || (!isValid && isDirty)}
      className={className}
    >
      {isSubmitting ? "Loading..." : label}
    </AppButton>
  );
}

export function AppBackButton({ label }: { label: string }) {
  const navigate = useNavigate();
  return (
    <AppButton
      variant="ghost"
      size="sm"
      className="text-blue-950 font-bold px-0 rounded-sm mb-3"
      leftIcon={<ArrowLeft size={15} />}
      onClick={() => navigate(-1) || navigate("/")}
    >
      {label}
    </AppButton>
  );
}
