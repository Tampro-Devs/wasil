import AppButton, {
  AppSubmitButton,
} from "../../../shared/components/app.button";
import {
  AppContentBody,
  AppContentContainer,
  AppContentHeader,
} from "../../../shared/components/app.content.container";
import { setPageHeader } from "../../../utils/general_hooks";
import DatePicker from "../../../shared/components/app.date.picker";
import { AppForm } from "../../../shared/components/app.form";
import { AppTextField } from "../../../shared/components/app.form.fields";
import {
  contributionFilterSchema,
  defaultContributionFilterValues,
  type ContributionFilterFormValues,
} from "../types/contribution.filter.for.schema";
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
import { Plus } from "lucide-react";
import { convertStringToDate, formatMoney } from "../../../utils/globals";

export default function ContributionMainPage() {
  setPageHeader("Contribution");
  return (
    <AppContentContainer>
      <AppContentHeader
      // title="My Contribution"
      // actions={
      // }
      >
        <AppForm<ContributionFilterFormValues>
          schema={contributionFilterSchema}
          defaultValues={defaultContributionFilterValues}
          onSubmit={() => {}}
          className="my-3"
        >
          <div className="flex gap-3 w-full">
            <AppTextField<ContributionFilterFormValues>
              name="receipt"
              placeholder="Receipt..."
              className="w-60"
            />
            <DatePicker<ContributionFilterFormValues>
              name="date"
              className="mb-3 w-60"
            />
            <AppSubmitButton label="Submit" className="h-10" />
          </div>
        </AppForm>
      </AppContentHeader>
      <AppContentBody>
        <TableWrapper>
          <TableCaption className="flex justify-between mb-3">
            <span>My Contribution</span>
            <AppButton size="xs" variant="secondary" onClick={() => {}}>
              <Plus />
            </AppButton>
          </TableCaption>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S/N</TableHead>
                <TableHead>Receipt</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>BGN764879</TableCell>
                <TableCell>{formatMoney(10000)}</TableCell>
                <TableCell>Membership Fee</TableCell>
                <TableCell>{convertStringToDate("2026-05-01")}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableWrapper>
      </AppContentBody>
    </AppContentContainer>
  );
}
