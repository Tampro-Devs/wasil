import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  TableWrapper,
  TableCaption,
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  LoadingTableBody,
} from "../../../shared/components/table";

import {
  defaultWardFilterValues,
  wardFilterSchema,
  type WardFilterFormValues,
} from "../schemas/ward.form.schema";
import { type SelectOption } from "../../../shared/components/form/fields/app.select.field";
import { AppFormProvider } from "../../../shared/components/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import WardServices from "../services/ward.services";
import { apiQueryKeys } from "../../../api.service.config/query.config/query.keys";
import RegionSelectInput from "./forms/inputs/region.select.input";
import DistrictSelectInput from "./forms/inputs/district.select.input";
import { AppSubmitButton } from "../../../shared/components/app.button";

export default function WardsSection() {
  const queryClient = useQueryClient();
  const [selectedRegion, setSelectedRegion] = useState<SelectOption | null>(
    null,
  );
  const [selectedDistrict, setSelectedDistrict] = useState<SelectOption | null>(
    null,
  );

  const form = useForm<WardFilterFormValues>({
    resolver: zodResolver(wardFilterSchema),
    defaultValues: defaultWardFilterValues,
  });

  const wardMutation = useMutation({
    mutationFn: WardServices.getWards,
  });

  async function onSubmit(data: WardFilterFormValues) {
    void (async () => {
      await wardMutation.mutateAsync({
        districtId: data.district,
      });
      await queryClient.invalidateQueries({
        queryKey: apiQueryKeys.wards,
      });
    })();
  }

  return (
    <div className="w-full flex flex-col gap-5">
      <AppFormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex-col flex gap-5"
        >
          <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 md:flex  md:flex-row md:flex-wrap">
            <RegionSelectInput
              control={form.control}
              name="region"
              placeholder="Select Region"
              widthClass="w-full sm:w-60 md:w-46"
              onChange={(option) => {
                if (!option) return null;
                setSelectedRegion(option);
              }}
            />

            <DistrictSelectInput
              control={form.control}
              regionId={selectedRegion?.value}
              name="district"
              placeholder="Select Districts"
              widthClass="w-full sm:w-60 md:w-46"
              onChange={(option) => {
                if (!option) return null;
                setSelectedDistrict(option);
              }}
            />
            <AppSubmitButton className="w-full lg:w-xs" label="Submit" />
          </div>
        </form>
      </AppFormProvider>

      <TableWrapper
        className="flex flex-col"
        error={
          wardMutation.data?.message &&
          (wardMutation.data.data?.length ?? 0) === 0
            ? {
                title: "No Ward",
                message: wardMutation.data.message,
              }
            : undefined
        }
      >
        <TableCaption>
          <span className="font-bold me-1">District:</span>
          <span className="text-xs">{selectedDistrict?.label}</span>
        </TableCaption>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Streets</TableHead>
              <TableHead>Members</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {wardMutation.isPending ? (
              <LoadingTableBody columns={3} />
            ) : (
              wardMutation.data?.data?.map((ward, index) => (
                <TableRow key={index}>
                  <TableCell>{ward.name}</TableCell>
                  <TableCell>100</TableCell>
                  <TableCell>200</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
