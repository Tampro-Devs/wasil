import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "../../../../shared/components/table";

export default function RegionsSection() {
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
            <TableHead>Name</TableHead>
            <TableHead>Districts</TableHead>
            <TableHead>Members</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 30 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>Morogoro</TableCell>
              <TableCell>5</TableCell>
              <TableCell>100</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
