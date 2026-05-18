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

interface BaseFieldProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  rules?: RegisterOptions<T>;
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
}: TextFieldProps<T>) {
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
                `!border !border-slate-300 !bg-slate-300/30 !px-3 ${widthClass} !rounded-xl text-xs`,
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

export function CheckboxField<T extends FieldValues>({
  name,
  label,
  disabled,
}: BaseFieldProps<T>) {
  const form = useAppFormContext<T>();
  const { errors } = useFormState({ control: form.control, name, exact: true });
  const error = get(errors, name);

  return (
    <div className="field-wrapper field-wrapper--inline">
      <input
        id={String(name)}
        type="checkbox"
        disabled={disabled}
        className="field-checkbox"
        {...form.register(name)}
      />
      <label htmlFor={String(name)} className="field-label field-label--inline">
        {label}
      </label>
      {error && (
        <p className="field-error" role="alert">
          {error.message as string}
        </p>
      )}
    </div>
  );
}
