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
  defaultStreetFilterValues,
  streetFilterSchema,
  type StreetFilterFormValues,
} from "../schemas/street.form.schema";
import { type SelectOption } from "../../../shared/components/form/fields/app.select.field";
import { AppFormProvider } from "../../../shared/components/form";
import { AppSubmitButton } from "../../../shared/components/app.button";
import RegionSelectInput from "../../../shared/components/form/inputs/region.select.input";
import DistrictSelectInput from "../../../shared/components/form/inputs/district.select.input";
import { useState } from "react";
import WardSelectInput from "../../../shared/components/form/inputs/ward.select.input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import StreetServices from "../services/street.services";
import { apiQueryKeys } from "../../../api.service.config/query.config/query.keys";

export default function StreetsSection() {
  const queryClient = useQueryClient();
  const [selectedRegion, setSelectedRegion] = useState<SelectOption | null>(
    null,
  );
  const [selectedDistrict, setSelectedDistrict] = useState<SelectOption | null>(
    null,
  );
  const [selectedWard, setSelectedWard] = useState<SelectOption | null>(null);
  const form = useForm<StreetFilterFormValues>({
    resolver: zodResolver(streetFilterSchema),
    defaultValues: defaultStreetFilterValues,
  });

  const streetMutation = useMutation({
    mutationFn: StreetServices.getStreets,
  });

  async function onSubmit(data: StreetFilterFormValues) {
    void (async () => {
      await streetMutation.mutateAsync({
        wardId: data.ward,
      });
      await queryClient.invalidateQueries({
        queryKey: apiQueryKeys.streets,
      });
    })();
  }

  return (
    <div className="w-full flex flex-col gap-5">
      <AppFormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex-col sm:flex-row flex sm:gap-5"
        >
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 md:flex md:flex-row md:flex-wrap">
            <RegionSelectInput
              control={form.control}
              name="region"
              placeholder="Select Region"
              widthClass="w-full lg:w-xs"
              onChange={(option) => {
                if (!option) return null;
                setSelectedRegion(option);
              }}
            />

            <DistrictSelectInput
              control={form.control}
              regionId={selectedRegion?.value}
              name="district"
              placeholder="Select District"
              widthClass="w-full lg:w-xs"
              onChange={(option) => {
                if (!option) return null;
                setSelectedDistrict(option);
              }}
            />

            <WardSelectInput
              control={form.control}
              districtId={selectedDistrict?.value ?? ""}
              name="ward"
              placeholder="Select Wards"
              widthClass="w-full lg:w-xs"
              onChange={(option) => {
                if (!option) return null;
                setSelectedWard(option);
              }}
            />
            <AppSubmitButton className="w-full lg:w-xs" label="Submit" />
          </div>
        </form>
      </AppFormProvider>

      <TableWrapper
        className="flex flex-col"
        error={
          streetMutation.data?.message &&
          (streetMutation.data.data?.length ?? 0) === 0
            ? {
                title: "No Streets",
                message: streetMutation.data.message,
              }
            : undefined
        }
      >
        <TableCaption>
          <span className="font-bold me-1">Ward:</span>
          <span className="text-xs">{selectedWard?.label}</span>
        </TableCaption>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S/N</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Members</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {streetMutation.isPending ? (
              <LoadingTableBody columns={3} />
            ) : (
              streetMutation.data?.data?.map((street, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{street.name}</TableCell>
                  <TableCell>10</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
