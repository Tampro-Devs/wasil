import type React from "react";
import { useFormContext } from "react-hook-form";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type?: string;
}

export function FormField({ name, label, type = "text" }: FieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col">
      <label className="text-slate-500">{label}</label>
      <input
        {...register(name)}
        type={type}
        placeholder="your@email.com"
        className="border border-slate-500 rounded-sm h-8 px-1"
      />
      {errors[name] && (
        <span className="text-red-400">{errors[name]?.message as string}</span>
      )}
    </div>
  );
}
