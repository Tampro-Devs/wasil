import type { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  AppSelectField,
  type SelectOption,
} from "../../../../../shared/components/form/fields/app.select.field";
import { useQuery } from "@tanstack/react-query";
import type { ResponseResource } from "../../../../../utils/response.resource";
import type { Region } from "../../../types/region.type";
import { apiQueryKeys } from "../../../../../api.service.config/query.config/query.keys";
import RegionServices from "../../../services/region.services";
import { toSelectOptions } from "../../../../../utils/globals";

interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  placeholder: string;
  widthClass: string;
  control: Control<T, any, T>;
  onChange?: (value: SelectOption | null) => void | null;
}

export default function RegionSelectInput<T extends FieldValues>({
  name,
  placeholder,
  control,
  widthClass,
  onChange = (_value: SelectOption | null) => {},
}: Props<T>) {
  const regionOptions = useQuery<
    ResponseResource<Region[]>,
    Error,
    SelectOption[]
  >({
    queryKey: apiQueryKeys.regions,
    queryFn: RegionServices.getRegions,
    select: (response) => toSelectOptions(response.data, "name", "region_id"),
  });
  return (
    <AppSelectField
      control={control}
      name={name}
      placeholder={placeholder}
      widthClass={widthClass}
      isLoading={regionOptions.isLoading}
      options={regionOptions.data ?? []}
      onChange={onChange}
    />
  );
}
