import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { AppSelectField, type SelectOption } from "../fields/app.select.field";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiQueryKeys } from "../../../../api.service.config/query.config/query.keys";
import { toSelectOptions } from "../../../../utils/globals";
import DistrictServices from "../../../../modules/configs/services/district.services";
import { useEffect, useState } from "react";

interface Props<T extends FieldValues> {
  regionId?: string;
  name: FieldPath<T>;
  placeholder: string;
  label?: string;
  widthClass: string;
  control: Control<T, any, T>;
  onChange?: (value: SelectOption | null) => void | null;
}

export default function DistrictSelectInput<T extends FieldValues>({
  regionId,
  name,
  placeholder,
  control,
  label,
  widthClass,
  onChange = (_value: SelectOption | null) => {},
}: Props<T>) {
  const queryClient = useQueryClient();
  const [districtOptions, setDistrictOptions] = useState<SelectOption[]>([]);

  const districtOptionsMutation = useMutation({
    mutationFn: DistrictServices.getDistricts,
    onSuccess: (response) => {
      const options = toSelectOptions(response.data, "name", "district_id");
      setDistrictOptions(options);
    },
  });

  useEffect(() => {
    if (!regionId) return;
    void (async () => {
      await districtOptionsMutation.mutateAsync({
        regionId: regionId,
      });
      await queryClient.invalidateQueries({
        queryKey: apiQueryKeys.districts,
      });
    })();
  }, [regionId]);

  return (
    <AppSelectField
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      widthClass={widthClass}
      isLoading={districtOptionsMutation.isPending}
      options={districtOptions ?? []}
      onChange={onChange}
    />
  );
}
