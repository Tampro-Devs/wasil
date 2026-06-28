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
import { regions, districts, wards } from "../data";
import {
  streetSchema,
  type StreetFormValues,
} from "../schemas/street.form.schema";
import { streetDummies } from "../types/street.type";

export default function StreetsSection() {
  return (
    <div className="w-full flex flex-col gap-5">
      <AppForm<StreetFormValues>
        schema={streetSchema}
        onSubmit={() => {}}
        className="w-full flex-col sm:flex-row flex sm:gap-5"
      >
        <div className="sm:grid sm:grid-cols-2 sm:gap-2 md:flex md:flex-wrap">
          <div className="flex-1">
            <AppSelectField
              name=""
              placeholder="Select Region"
              widthClass="w-full sm:w-60 md:w-46"
              options={regions}
            />
          </div>
          <div className="flex-1">
            <AppSelectField
              name=""
              placeholder="Select Districts"
              widthClass="w-full sm:w-60 md:w-46"
              options={districts}
            />
          </div>
          <div className="flex-1">
            <AppSelectField
              name=""
              placeholder="Select Wards"
              widthClass="w-full sm:w-60 md:w-46"
              options={wards}
            />
          </div>
        </div>
      </AppForm>

      <TableWrapper
        className="flex flex-col"
        // error={{
        //   title: "No Streets Found",
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
              <TableHead>S/N</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Members</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {streetDummies.map((street, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{street.name}</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
