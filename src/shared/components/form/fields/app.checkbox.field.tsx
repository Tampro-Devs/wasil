import type { FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  type BaseFieldProps,
} from "..";

export function AppCheckboxField<T extends FieldValues>({
  name,
  label,
  disabled,
  control,
}: BaseFieldProps<T>) {
  return (
    <div className="flex flex-col">
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className={`relative flex gap-1 items-center group`}>
                <label
                  className={`relative flex items-center cursor-pointer group`}
                >
                  <input
                    id={String(name)}
                    {...field}
                    disabled={disabled}
                    className="peer sr-only cursor-pointer"
                    type="checkbox"
                  />
                  <div className="size-6 rounded-lg bg-white border-2 border-blue-900 transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-blue-900 to-blue-800 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(28,202,106,0.5)]"></div>
                </label>
                <FormLabel>
                  <span className="text-sm font-medium text-gray-900">
                    {label}
                  </span>
                </FormLabel>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
    </div>
  );
}
