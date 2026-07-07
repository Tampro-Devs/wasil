import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { AppSelectField, type SelectOption } from "../fields/app.select.field";
import { useQuery } from "@tanstack/react-query";
import type { Member } from "../../../../modules/members/types/member.type";
import type { ResponseResource } from "../../../../utils/response.resource";
import { apiQueryKeys } from "../../../../api.service.config/query.config/query.keys";
import { toSelectOptions } from "../../../../utils/globals";
import MemberServices from "../../../../modules/members/services/member.services";

interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  placeholder: string;
  widthClass: string;
  label?: string;
  control: Control<T, any, T>;
  onChange?: (value: SelectOption | null) => void | null;
}

export default function MemberSelectInput<T extends FieldValues>({
  name,
  placeholder,
  control,
  label,
  widthClass,
  onChange = (_value: SelectOption | null) => {},
}: Props<T>) {
  const memberOptions = useQuery<
    ResponseResource<Member[]>,
    Error,
    SelectOption[]
  >({
    queryKey: apiQueryKeys.leaders,
    queryFn: MemberServices.getMembers,
    select: (response) => toSelectOptions(response.data, "first_name", "user"),
  });
  return (
    <AppSelectField
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      widthClass={widthClass}
      isLoading={memberOptions.isLoading}
      options={memberOptions.data ?? []}
      onChange={onChange}
    />
  );
}
