import { AppSubmitButton } from "../../../shared/components/app.button";
import { AppForm } from "../../../shared/components/app.form";
import { AppTextField } from "../../../shared/components/app.form.fields";
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

import {
  defaultMemberContributionFilterFormValues,
  memberContributionFilterSchema,
  type MemberContributionFilterFormValues,
} from "../schema/member.contribution.filter.schema";
import { memberContributionDummies } from "../types/contribution.type";

export default function MemberContributionSection() {
  return (
    <TableWrapper
      className="flex flex-col"
      //   error={{
      //     title: "No Contribution Found for this Member",
      //     message:
      //       "When member contribute to the organization, they will appear here",
      //     Icon: Banknote,
      //   }}
    >
      <TableCaption>
        <AppForm<MemberContributionFilterFormValues>
          schema={memberContributionFilterSchema}
          defaultValues={defaultMemberContributionFilterFormValues}
          className="flex gap-5"
          onSubmit={() => {}}
        >
          <AppTextField name="receipt" placeholder="Receipt" className="w-96" />
          <AppSubmitButton label="Search" className="h-9" />
        </AppForm>
      </TableCaption>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S/N</TableHead>
            <TableHead>Receipt</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {memberContributionDummies.map((contribution, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{contribution.receipt}</TableCell>
              <TableCell>{formatMoney(contribution.amount)}</TableCell>
              <TableCell>{contribution.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
}
