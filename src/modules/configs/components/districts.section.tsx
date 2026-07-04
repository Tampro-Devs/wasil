import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "../../../shared/components/table";
import { regions } from "../data";
import {
  defaultDistrictValues,
  districtSchema,
  type DistrictFormValues,
} from "../schemas/district.form.schema";

import { districtDummies } from "../types/district.type";
import { AppFormProvider } from "../../../shared/components/form";
import { AppSelectField } from "../../../shared/components/form/fields/app.select.field";

export default function DistrictsSection() {
  const form = useForm<DistrictFormValues>({
    resolver: zodResolver(districtSchema),
    defaultValues: defaultDistrictValues,
  });

  async function onSubmit(data: DistrictFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
  }

  return (
    <div className="w-full flex flex-col gap-5">
      <AppFormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex gap-5"
        >
          <div className="flex-1">
            <AppSelectField
              control={form.control}
              name="region"
              placeholder="Select Region"
              widthClass="w-full sm:w-60"
              options={regions}
            />
          </div>
        </form>
      </AppFormProvider>

      <TableWrapper
        className="flex flex-col"
        // error={{
        //   title: "No Morogoro Districts Found",
        //   message: "Click plus icon to add one",
        // }}
      >
        <TableCaption>
          <span className="font-bold me-1">Region:</span>
          <span className="text-xs">Morogoro</span>
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
            {districtDummies.map((district, index) => (
              <TableRow key={index}>
                <TableCell>{district.name}</TableCell>
                <TableCell>12</TableCell>
                <TableCell>30</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
