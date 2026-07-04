import type { FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  type BaseFieldProps,
} from "../..";
import { AppDatePickerField } from "./app.date.picker.field";

interface AppDatePickerProps<T extends FieldValues> extends BaseFieldProps<T> {
  minYear?: number;
  maxYear?: number;
  placeholder?: string;
}

export function AppDatePicker<T extends FieldValues>({
  name,
  label,
  control,
  disabled,
  className,
  minYear,
  maxYear,
  placeholder,
}: AppDatePickerProps<T>) {
  return (
    <div className={className}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}

            <FormControl>
              <AppDatePickerField
                value={field.value}
                onChange={field.onChange}
                disabled={disabled}
                placeholder={placeholder}
                minYear={minYear}
                maxYear={maxYear}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
