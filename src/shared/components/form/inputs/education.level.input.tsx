import { useQuery } from "@tanstack/react-query";
import type { EducationLevel } from "../../../../modules/configs/types/education.type";
import type { ResponseResource } from "../../../../utils/response.resource";
import { AppSelectField, type SelectOption } from "../fields/app.select.field";
import { apiQueryKeys } from "../../../../api.service.config/query.config/query.keys";
import { toSelectOptions } from "../../../../utils/globals";
import EducationLevelServices from "../../../../modules/configs/services/education.level.services";
import type { Control, FieldPath, FieldValues } from "react-hook-form";

interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  placeholder: string;
  label?: string;
  widthClass: string;
  control: Control<T, any, T>;
  onChange?: (value: SelectOption | null) => void | null;
}

export default function EducationLevelSelectInput<T extends FieldValues>({
  name,
  placeholder,
  control,
  label,
  widthClass,
  onChange = (_value: SelectOption | null) => {},
}: Props<T>) {
  const educationLevelOptions = useQuery<
    ResponseResource<EducationLevel[]>,
    Error,
    SelectOption[]
  >({
    queryKey: apiQueryKeys.educationLevels,
    queryFn: EducationLevelServices.getEducationLevels,
    select: (response) => toSelectOptions(response.data, "name", "level_id"),
  });
  return (
    <AppSelectField
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      widthClass={widthClass}
      isLoading={educationLevelOptions.isLoading}
      options={educationLevelOptions.data ?? []}
      onChange={onChange}
    />
  );
}
