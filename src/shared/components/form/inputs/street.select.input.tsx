import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { AppSelectField, type SelectOption } from "../fields/app.select.field";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiQueryKeys } from "../../../../api.service.config/query.config/query.keys";
import { toSelectOptions } from "../../../../utils/globals";
import StreetServices from "../../../../modules/configs/services/street.services";
import { useEffect, useState } from "react";

interface Props<T extends FieldValues> {
  wardId: string;
  name: FieldPath<T>;
  placeholder: string;
  label: string;
  widthClass: string;
  control: Control<T, any, T>;
  onChange?: (value: SelectOption | null) => void | null;
}

export default function StreetSelectInput<T extends FieldValues>({
  wardId,
  name,
  label,
  placeholder,
  control,
  widthClass,
  onChange = (_value: SelectOption | null) => {},
}: Props<T>) {
  const queryClient = useQueryClient();
  const [streetOptions, setStreetOptions] = useState<SelectOption[]>([]);

  const streetOptionsMutation = useMutation({
    mutationFn: StreetServices.getStreets,
    onSuccess: (response) => {
      const options = toSelectOptions(response.data, "name", "street_id");
      setStreetOptions(options);
    },
  });

  useEffect(() => {
    if (!wardId) return;
    void (async () => {
      await streetOptionsMutation.mutateAsync({
        wardId: wardId,
      });
      await queryClient.invalidateQueries({
        queryKey: apiQueryKeys.districts,
      });
    })();
  }, [wardId]);

  return (
    <AppSelectField
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      widthClass={widthClass}
      isLoading={streetOptionsMutation.isPending}
      options={streetOptions ?? []}
      onChange={onChange}
    />
  );
}
