import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AppSubmitButton } from "../../../shared/components/app.button";

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
import { AppTextField } from "../../../shared/components/form/fields/app.text.field";
import { AppFormProvider } from "../../../shared/components/form";

export default function MemberContributionSection() {
  const form = useForm<MemberContributionFilterFormValues>({
    resolver: zodResolver(memberContributionFilterSchema),
    defaultValues: defaultMemberContributionFilterFormValues,
  });

  async function onSubmit(data: MemberContributionFilterFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
  }
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
        <AppFormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex gap-5"
          >
            <AppTextField
              control={form.control}
              name="receipt"
              placeholder="Receipt"
              className="w-full sm:w-96"
            />
            <AppSubmitButton label="Search" className="h-9" />
          </form>
        </AppFormProvider>
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
