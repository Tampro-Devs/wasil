import { CreditCard, Users, Users2 } from "lucide-react";
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
import { formatMoney } from "../../../utils/globals";

export function DashboardContributionTable() {
  return (
    <TableWrapper
      className="h-70 flex flex-col"
      error={{
        title: "No Contribution Found",
        message:
          "No contribution found according to the submitted filters, Try to change filters",
        Icon: CreditCard,
      }}
    >
      <TableCaption className="flex items-center gap-1">
        <CreditCard />
        <span>Latest Contribution</span>
      </TableCaption>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Member</TableHead>
            <TableHead>Branch</TableHead>
            <TableHead>District</TableHead>
            <TableHead>Ward</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>Jumanne Mpinga</TableCell>
              <TableCell>Morogoro</TableCell>
              <TableCell>Morogoro Mjini</TableCell>
              <TableCell>Moro</TableCell>
              <TableCell>{formatMoney(10000)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
export function DashboardAcquisitionTable() {
  return (
    <TableWrapper>
      <TableCaption className="flex items-center gap-1 mb-1">
        <Users />
        <span>Latest Acquisition</span>
      </TableCaption>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Member</TableHead>
            <TableHead>Branch</TableHead>
            <TableHead>District</TableHead>
            <TableHead>Ward</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>Jumanne Mpinga</TableCell>
              <TableCell>Morogoro</TableCell>
              <TableCell>Morogoro Mjini</TableCell>
              <TableCell>Moro</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
