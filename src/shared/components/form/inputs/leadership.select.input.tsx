import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { AppSelectField, type SelectOption } from "../fields/app.select.field";
import { useMutation } from "@tanstack/react-query";
import { toSelectOptions } from "../../../../utils/globals";

import { useEffect, useState } from "react";
import { LeadershipServices } from "../../../../modules/organization/services/leadership.services";

interface Props<T extends FieldValues> {
  category?: number;
  name: FieldPath<T>;
  placeholder: string;
  label?: string;
  widthClass: string;
  control: Control<T, any, T>;
  onChange?: (value: SelectOption | null) => void | null;
}

export default function LeadershipSelectInput<T extends FieldValues>({
  category,
  name,
  placeholder,
  control,
  label,
  widthClass,
  onChange = (_value: SelectOption | null) => {},
}: Props<T>) {
  const [leadershipOptions, setLeadershipOptions] = useState<SelectOption[]>(
    [],
  );

  const leadershipOptionsMutation = useMutation({
    mutationFn: LeadershipServices.getLeaderships,
    onSuccess: (response) => {
      const options = toSelectOptions(
        response.data,
        ["title"],
        "leadership_id",
      );
      setLeadershipOptions(options);
    },
  });

  useEffect(() => {
    if (!category) return;
    void (async () => {
      await leadershipOptionsMutation.mutateAsync(category);
    })();
  }, [category]);

  return (
    <AppSelectField
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      widthClass={widthClass}
      isLoading={leadershipOptionsMutation.isPending}
      options={leadershipOptions ?? []}
      onChange={onChange}
    />
  );
}
