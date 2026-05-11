import AppSelectField from "../../../../shared/components/app.select.field";
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
import { districts, regions } from "../../data";

export default function WardsSection() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <AppSelectField
          placeholder="Select Region"
          widthClass="w-60"
          options={regions}
        />
        <AppSelectField
          placeholder="Select Districts"
          widthClass="w-60"
          options={districts}
        />
      </div>

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
