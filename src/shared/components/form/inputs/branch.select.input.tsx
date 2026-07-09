import type { Control, FieldPath, FieldValues } from "react-hook-form";
import type { Branch } from "../../../../modules/organization/types/branch.type";
import { AppSelectField, type SelectOption } from "../fields/app.select.field";
import { useQuery } from "@tanstack/react-query";
import type { ResponseResource } from "../../../../utils/response.resource";
import { apiQueryKeys } from "../../../../api.service.config/query.config/query.keys";
import BranchServices from "../../../../modules/organization/services/branch.services";
import { toSelectOptions } from "../../../../utils/globals";
import { useState } from "react";

interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  placeholder: string;
  label?: string;
  widthClass: string;
  control: Control<T, any, T>;
  onChange?: (value: SelectOption | null, region: string | null) => void | null;
}

export default function BranchSelectInput<T extends FieldValues>({
  name,
  placeholder,
  control,
  label,
  widthClass,
  onChange = (_value: SelectOption | null) => {},
}: Props<T>) {
  const [branches, setBranches] = useState<Branch[] | null>(null);
  const branchOptions = useQuery<
    ResponseResource<Branch[]>,
    Error,
    SelectOption[]
  >({
    queryKey: apiQueryKeys.branches,
    queryFn: BranchServices.getBranches,
    select: (response) => {
      setBranches(response.data);
      return toSelectOptions(response.data, "name", "branch_id");
    },
  });
  return (
    <AppSelectField
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      widthClass={widthClass}
      isLoading={branchOptions.isLoading}
      options={branchOptions.data ?? []}
      onChange={(option) => {
        const selectedBranch = branches?.find(
          (item) => item.branch_id === option?.value,
        );

        if (selectedBranch) {
          onChange(option, selectedBranch?.location.region_id);
        }
      }}
    />
  );
}
