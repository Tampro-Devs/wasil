import { AppForm } from "../../../shared/components/app.form";
import { AppSelectField } from "../../../shared/components/app.form.fields";
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

export default function DistrictsSection() {
  return (
    <div className="w-full flex flex-col gap-5">
      <AppForm<DistrictFormValues>
        schema={districtSchema}
        defaultValues={defaultDistrictValues}
        onSubmit={() => {}}
        className="w-full flex gap-5"
      >
        <div className="flex-1">
          <AppSelectField<DistrictFormValues>
            name="region"
            placeholder="Select Region"
            widthClass="w-full sm:w-60"
            options={regions}
          />
        </div>
      </AppForm>

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
