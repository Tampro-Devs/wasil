import { AppForm } from "../../../../shared/components/app.form";
import { AppSelectField } from "../../../../shared/components/app.form.fields";
import {
  TableWrapper,
  TableCaption,
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../../../../shared/components/table";
import { regions, districts, wards } from "../../data";
import {
  streetSchema,
  type StreetFormValues,
} from "../../schemas/street.form.schema";

export default function StreetsSection() {
  return (
    <div className="flex flex-col gap-5">
      <AppForm<StreetFormValues>
        schema={streetSchema}
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
        <AppSelectField
          name=""
          placeholder="Select Wards"
          widthClass="w-60"
          options={wards}
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
          <span className="font-bold me-1">Ward:</span>
          <span className="text-xs">Ward 01</span>
        </TableCaption>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Members</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>Mtaani</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
