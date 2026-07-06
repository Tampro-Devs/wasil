import type { FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  type BaseFieldProps,
} from "..";

import Select, { type GroupBase, type SingleValue } from "react-select";

export type SelectOption = {
  label: string;
  value: string;
};

interface SelectFieldProps<T extends FieldValues> extends BaseFieldProps<T> {
  options: SelectOption[];
  onChange?: (value: SelectOption | null) => void | null;
  isLoading?: boolean;
  widthClass?: string;
}

export function AppSelectField<T extends FieldValues>({
  name,
  label,
  options,
  control,
  placeholder,
  disabled,
  onChange = (_value: SelectOption | null) => {},
  widthClass = "w-full",
  isLoading = false,
}: SelectFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select<SelectOption, false, GroupBase<SelectOption>>
              inputId={String(name)}
              options={options}
              placeholder={placeholder}
              isDisabled={disabled}
              isLoading={isLoading}
              onBlur={field.onBlur}
              menuPortalTarget={document.body}
              ref={field.ref}
              value={options.find((opt) => opt.value === field.value) ?? null}
              onChange={(selected: SingleValue<SelectOption>) => {
                field.onChange(selected?.value ?? "");
                onChange(selected);
              }}
              classNames={{
                control: () =>
                  `!border !border-slate-300 !bg-slate-300/30 ${widthClass} !rounded-xl text-xs cursor-pointer`,
                menu: () => "!rounded-lg",
                option: ({ isFocused }) =>
                  isFocused
                    ? "!bg-slate-300/30 !text-black !text-xs"
                    : "!text-xs !bg-transparent !text-black hover:!bg-slate-300/30",
              }}
              menuPosition="fixed"
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  );
}
