import Select from "react-select";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  name?: string;
  options: SelectOption[];
  onChange?: (value: SelectOption | null) => void;
  placeholder?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  widthClass?: string;
};

export default function AppSelectField({
  name,
  options,
  widthClass = "w-full",
  placeholder = "Select",
  isDisabled = false,
  isLoading = false,
}: SelectProps) {
  return (
    <Select
      placeholder={placeholder}
      classNamePrefix="select"
      isDisabled={isDisabled}
      isLoading={isLoading}
      name={name}
      options={options}
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
  );
}
