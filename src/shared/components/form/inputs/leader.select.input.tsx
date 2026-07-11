import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { AppSelectField, type SelectOption } from "../fields/app.select.field";
import { useMutation } from "@tanstack/react-query";
import { toSelectOptions } from "../../../../utils/globals";
import MemberServices from "../../../../modules/members/services/member.services";
import {
  defaultMemberFilterValues,
  type MemberFilterFormValues,
} from "../../../../modules/members/schema/member.filter.schema";
import { useEffect, useState } from "react";

interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  placeholder: string;
  widthClass: string;
  label?: string;
  control: Control<T, any, T>;
  filters?: MemberFilterFormValues;
  onChange?: (value: SelectOption | null) => void | null;
}

export default function MemberSelectInput<T extends FieldValues>({
  name,
  placeholder,
  control,
  label,
  widthClass,
  filters = defaultMemberFilterValues,
  onChange = (_value: SelectOption | null) => {},
}: Props<T>) {
  const [memberOptions, setMemberOptions] = useState<SelectOption[]>([]);

  const memberOptionsMutation = useMutation({
    mutationFn: MemberServices.getMembers,
    onSuccess: (response) => {
      let options: SelectOption[] = [];
      if (response.data) {
        options = toSelectOptions(
          response.data,
          ["first_name", "middle_name", "last_name"],
          "member_id",
        );
      }
      setMemberOptions(options);
    },
  });

  useEffect(() => {
    if (!filters) return;
    void (async () => {
      await memberOptionsMutation.mutateAsync(filters);
    })();
  }, [filters]);

  return (
    <AppSelectField
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      widthClass={widthClass}
      isLoading={memberOptionsMutation.isPending}
      options={memberOptions}
      onChange={onChange}
    />
  );
}
