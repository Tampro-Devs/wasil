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
}: BaseFieldProps<T>) {
  return (
    <div className="mb-3">
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <input
                {...field}
                type={type}
                className="w-full h-7 p-1 text-xs bg-white border border-slate-200 rounded-lg"
                placeholder={placeholder}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
