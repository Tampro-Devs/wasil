import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { AppSelectField, type SelectOption } from "../fields/app.select.field";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiQueryKeys } from "../../../../api.service.config/query.config/query.keys";
import { toSelectOptions } from "../../../../utils/globals";
import WardServices from "../../../../modules/configs/services/ward.services";
import { useEffect, useState } from "react";

interface Props<T extends FieldValues> {
  districtId?: string;
  name: FieldPath<T>;
  placeholder: string;
  label?: string;
  widthClass: string;
  control: Control<T, any, T>;
  onChange?: (value: SelectOption | null) => void | null;
}

export default function WardSelectInput<T extends FieldValues>({
  districtId,
  name,
  label,
  placeholder,
  control,
  widthClass,
  onChange = (_value: SelectOption | null) => {},
}: Props<T>) {
  const queryClient = useQueryClient();
  const [wardOptions, setWardOptions] = useState<SelectOption[]>([]);

  const wardOptionsMutation = useMutation({
    mutationFn: WardServices.getWards,
    onSuccess: (response) => {
      const options = toSelectOptions(response.data, "name", "ward_id");
      setWardOptions(options);
    },
  });

  useEffect(() => {
    if (!districtId) return;
    void (async () => {
      await wardOptionsMutation.mutateAsync({
        districtId: districtId,
      });
      await queryClient.invalidateQueries({
        queryKey: apiQueryKeys.districts,
      });
    })();
  }, [districtId]);

  return (
    <AppSelectField
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      widthClass={widthClass}
      isLoading={wardOptionsMutation.isPending}
      options={wardOptions ?? []}
      onChange={onChange}
    />
  );
}
