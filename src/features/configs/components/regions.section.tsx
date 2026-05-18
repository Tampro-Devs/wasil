import { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "../../../shared/components/table";
import { shuffle } from "../../../utils/globals";
import { regionDummies } from "../types/region.type";

export default function RegionsSection() {
  const regions = useMemo(() => shuffle(regionDummies), []);
  return (
    <TableWrapper
      className="flex flex-col"
      //   error={{
      //     title: "No Regions Found",
      //     message: "Click Plus button to add them",
      //   }}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S/N</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Districts</TableHead>
            <TableHead>Members</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {regions.map((region, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{region.name}</TableCell>
              <TableCell>5</TableCell>
              <TableCell>100</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
