import { CreditCard, Users } from "lucide-react";
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
import { membersDummies } from "../../members/types/member.type";

export function DashboardContributionTable() {
  return (
    <TableWrapper
      className="min-h-70 flex flex-col"
      // error={{
      //   title: "No Contribution Found",
      //   message:
      //     "No contribution found according to the submitted filters, Try to change filters",
      //   Icon: CreditCard,
      // }}
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
            <TableHead>Gender</TableHead>
            <TableHead>Branch</TableHead>
            <TableHead>Contacts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {membersDummies.map((member, index) => (
            <TableRow key={index}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.gender}</TableCell>
              <TableCell>{member.branch?.name}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span>{member.email}</span>
                  <span>{member.phone}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
