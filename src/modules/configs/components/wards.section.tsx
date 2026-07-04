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
} from "../../../shared/components/table";
import { districts, regions } from "../data";

import {
  defaultWardValues,
  wardSchema,
  type WardFormValues,
} from "../schemas/ward.form.schema";
import { wardDummies } from "../types/ward.type";
import { AppSelectField } from "../../../shared/components/form/fields/app.select.field";
import { AppFormProvider } from "../../../shared/components/form";

export default function WardsSection() {
  const form = useForm<WardFormValues>({
    resolver: zodResolver(wardSchema),
    defaultValues: defaultWardValues,
  });

  async function onSubmit(data: WardFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
  }

  return (
    <div className="w-full flex flex-col gap-5">
      <AppFormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex-col flex gap-5"
        >
          <div className="sm:grid sm:grid-cols-2 md:flex md:flex-wrap">
            <div className="flex-1">
              <AppSelectField
                control={form.control}
                name="region"
                placeholder="Select Region"
                widthClass="w-full sm:w-60 md:w-46"
                options={regions}
              />
            </div>
            <div className="flex-1">
              <AppSelectField
                control={form.control}
                name="district"
                placeholder="Select Districts"
                widthClass="w-full sm:w-60 md:w-46"
                options={districts}
              />
            </div>
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
          <span className="font-bold me-1">District:</span>
          <span className="text-xs">Morogoro Mjini</span>
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
            {wardDummies.map((ward, index) => (
              <TableRow key={index}>
                <TableCell>{ward.name}</TableCell>
                <TableCell>100</TableCell>
                <TableCell>200</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
