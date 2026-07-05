import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  LoadingTableBody,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "../../../shared/components/table";

import {
  defaultDistrictFormFilterValues,
  districtFormFilterSchema,
  type DistrictFormFilterValues,
} from "../schemas/district.form.schema";

import { AppFormProvider } from "../../../shared/components/form";
import RegionSelectInput from "./forms/inputs/region.select.input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import DistrictServices from "../services/district.services";
import { useState } from "react";
import type { SelectOption } from "../../../shared/components/form/fields/app.select.field";
import { apiQueryKeys } from "../../../api.service.config/query.config/query.keys";
import { AppSubmitButton } from "../../../shared/components/app.button";

export default function DistrictsSection() {
  const queryClient = useQueryClient();
  const [selectedRegion, setSelectedRegion] = useState<SelectOption | null>(
    null,
  );
  const form = useForm<DistrictFormFilterValues>({
    resolver: zodResolver(districtFormFilterSchema),
    defaultValues: defaultDistrictFormFilterValues,
  });

  const districtMutation = useMutation({
    mutationFn: DistrictServices.getDistricts,
  });

  async function onSubmit(data: DistrictFormFilterValues) {
    void (async () => {
      await districtMutation.mutateAsync({
        regionId: data.region,
      });
      await queryClient.invalidateQueries({
        queryKey: apiQueryKeys.districts,
      });
    })();
  }

  return (
    <div className="w-full flex flex-col gap-5">
      <AppFormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex gap-5"
        >
          <div className="flex gap-3 items-center">
            <RegionSelectInput
              control={form.control}
              name="region"
              placeholder="Select Region"
              widthClass="w-full sm:w-60"
              onChange={(option) => {
                if (!option) return null;
                setSelectedRegion(option);
              }}
            />
            <AppSubmitButton
              label="Submit"
              loading={districtMutation.isPending}
            />
          </div>
        </form>
      </AppFormProvider>

      <TableWrapper
        className="flex flex-col"
        error={
          districtMutation.data?.message &&
          (districtMutation.data.data?.length ?? 0) === 0
            ? {
                title: "No Districts",
                message: districtMutation.data.message,
              }
            : undefined
        }
      >
        <TableCaption>
          <span className="font-bold me-1">Region:</span>
          <span className="text-xs">{selectedRegion?.label}</span>
        </TableCaption>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Wards</TableHead>
              <TableHead>Members</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {districtMutation.isPending ? (
              <LoadingTableBody columns={3} />
            ) : (
              districtMutation.data?.data?.map((district, index) => (
                <TableRow key={index}>
                  <TableCell>{district.name}</TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>30</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
