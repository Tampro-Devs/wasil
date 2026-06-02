import {
  Controller,
  type FieldValues,
  type Path,
  type RegisterOptions,
  get,
  useFormState,
} from "react-hook-form";
import { useAppFormContext } from "./app.form";
import Select, { type GroupBase, type SingleValue } from "react-select";
import { cn } from "../../utils/cn";

interface BaseFieldProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  rules?: RegisterOptions<T>;
  className?: string;
}

interface TextFieldProps<T extends FieldValues> extends BaseFieldProps<T> {
  type?: "text" | "email" | "password" | "url" | "tel";
}

export function AppTextField<T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder,
  disabled,
  rules,
  className,
}: TextFieldProps<T>) {
  const form = useAppFormContext<T>();
  const { errors } = useFormState({ control: form.control, name, exact: true });
  const error = get(errors, name);

  return (
    <div className={cn("mb-3", className)}>
      {label && (
        <label className="ps-3 text-sm text-slate-600 font-bold" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={String(name)}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full bg-slate-300/30 p-2 rounded-xl text-sm border border-slate-300`}
        aria-invalid={!!error}
        aria-describedby={error ? `${String(name)}-error` : undefined}
        {...form.register(name, rules)}
      />
      {error && (
        <p
          id={`${String(name)}-error`}
          className="ps-5 text-xs text-red-400"
          role="alert"
        >
          {error.message as string}
        </p>
      )}
    </div>
  );
}

// ─── SelectField ──────────────────────────────────────────────────────────

export type SelectOption = {
  label: string;
  value: string;
};

interface SelectFieldProps<T extends FieldValues> extends BaseFieldProps<T> {
  options: SelectOption[];
  onChange?: (value: SelectOption | null) => void;
  isLoading?: boolean;
  widthClass?: string;
}

export function AppSelectField<T extends FieldValues>({
  name,
  label,
  options,
  placeholder,
  disabled,
  widthClass = "w-full",
  isLoading = false,
}: SelectFieldProps<T>) {
  const form = useAppFormContext<T>();
  const { errors } = useFormState({ control: form.control, name, exact: true });
  const error = get(errors, name);

  return (
    <div className="field-wrapper mb-3">
      {label && (
        <label className="ps-3 text-sm text-slate-600 font-bold" htmlFor={name}>
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <Select<SelectOption, false, GroupBase<SelectOption>>
            inputId={String(name)}
            options={options}
            placeholder={placeholder}
            isDisabled={disabled}
            isLoading={isLoading}
            onBlur={field.onBlur}
            ref={field.ref}
            value={options.find((opt) => opt.value === field.value) ?? null}
            onChange={(selected: SingleValue<SelectOption>) =>
              field.onChange(selected?.value ?? "")
            }
            classNames={{
              control: () =>
                `!border !border-slate-300 !bg-slate-300/30 !px-3 ${widthClass} !rounded-xl text-xs cursor-pointer`,
              menu: () => "!rounded-lg",
              option: ({ isFocused }) =>
                isFocused
                  ? "!bg-slate-300/30 !text-black !text-xs"
                  : "!text-xs !bg-transparent !text-black hover:!bg-slate-300/30",
            }}
          />
        )}
      />
      {error && (
        <p
          id={`${String(name)}-error`}
          className="ps-5 text-xs text-red-400"
          role="alert"
        >
          {error.message as string}
        </p>
      )}
    </div>
  );
}

// ─── CheckboxField ────────────────────────────────────────────────────────

export function AppCheckboxField<T extends FieldValues>({
  name,
  label,
  disabled,
}: BaseFieldProps<T>) {
  const form = useAppFormContext<T>();
  const { errors } = useFormState({ control: form.control, name, exact: true });
  const error = get(errors, name);

  return (
    <div className="flex flex-col">
      <div className={`relative flex gap-1 items-center group`}>
        <label className={`relative flex items-center cursor-pointer group`}>
          <input
            id={String(name)}
            disabled={disabled}
            {...form.register(name)}
            className="peer sr-only cursor-pointer"
            type="checkbox"
          />
          <div className="size-6 rounded-lg bg-white border-2 border-blue-900 transition-all duration-300 ease-in-out peer-checked:bg-linear-to-br from-blue-900 to-blue-800 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(28,202,106,0.5)]"></div>
        </label>
        <label
          htmlFor={String(name)}
          className="text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      </div>
      {error && (
        <p className="text-xs text-red-400" role="alert">
          {error.message as string}
        </p>
      )}
    </div>
  );
}
