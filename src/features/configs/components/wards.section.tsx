import { AppForm } from "../../../shared/components/app.form";
import { AppSelectField } from "../../../shared/components/app.form.fields";
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

export default function WardsSection() {
  return (
    <div className="flex flex-col gap-5">
      <AppForm<WardFormValues>
        schema={wardSchema}
        defaultValues={defaultWardValues}
        onSubmit={() => {}}
        className="flex gap-5"
      >
        <AppSelectField
          name=""
          placeholder="Select Region"
          widthClass="w-60"
          options={regions}
        />
        <AppSelectField
          name=""
          placeholder="Select Districts"
          widthClass="w-60"
          options={districts}
        />
      </AppForm>

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
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>Msamvu</TableCell>
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
