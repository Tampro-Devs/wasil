import { type FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  type BaseFieldProps,
} from "..";

export function AppTextField<T extends FieldValues>({
  name,
  type = "text",
  label,
  placeholder,
  control,
  LeadingIcon,
  Suffix,
}: BaseFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="w-full h-10 flex items-center gap-3 rounded-xl bg-slate-300/30 border border-slate-300 px-4 focus-within:border-[#182f81] focus-within:ring-1 focus-within:ring-[#182f81] transition">
              {LeadingIcon}
              <input
                {...field}
                type={type}
                placeholder={placeholder}
                className="w-full bg-transparent text-xs text-gray-800 placeholder:text-gray-400 outline-none"
              />
              {Suffix}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
