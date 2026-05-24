import { AppSubmitButton } from "../../../shared/components/app.button";
import {
  AppContentBody,
  AppContentContainer,
} from "../../../shared/components/app.content.container";
import DatePicker from "../../../shared/components/app.date.picker";
import { AppForm } from "../../../shared/components/app.form";
import { AppSelectField } from "../../../shared/components/app.form.fields";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "../../../shared/components/table";
import { setPageHeader } from "../../../utils/general_hooks";
import {
  convertStringToDate,
  formatMoney,
  shortenNumber,
} from "../../../utils/globals";
import { regions, districts, wards } from "../../configs/data";
import { membersDummies } from "../../members/types/member.type";
import {
  defaultFinanceFilterValues,
  financeFilterSchema,
  type FinanceFilterFormValues,
} from "../schema/finance.filter.form.schema";
import { financeSources } from "../types/finance.source";

export default function FinanceMainPage() {
  setPageHeader("Finance");
  return (
    <AppContentContainer>
      <AppContentBody>
        <AppForm<FinanceFilterFormValues>
          schema={financeFilterSchema}
          defaultValues={defaultFinanceFilterValues}
          onSubmit={() => {}}
          className="my-3"
        >
          <DatePicker<FinanceFilterFormValues> name="date" className="mb-3" />
          <div className="flex gap-3">
            <AppSelectField<FinanceFilterFormValues>
              name="source"
              placeholder="Select Source"
              widthClass="w-60"
              options={financeSources}
            />
            <AppSelectField<FinanceFilterFormValues>
              name="region"
              placeholder="Select Region"
              widthClass="w-60"
              options={regions}
            />
            <AppSelectField<FinanceFilterFormValues>
              name="district"
              placeholder="Select Districts"
              widthClass="w-60"
              options={districts}
            />
            <AppSelectField<FinanceFilterFormValues>
              name="ward"
              placeholder="Select Wards"
              widthClass="w-60"
              options={wards}
            />
            <AppSubmitButton label="Submit" className="h-10" />
          </div>
        </AppForm>

        <div className="flex my-5 gap-5">
          <FinanceStatCard title="Total Revenue" statValue={3000000} />
          <FinanceStatCard
            title="Total Member Contribution"
            statValue={1000000}
          />
          <FinanceStatCard title="Total Expenditure" statValue={500000} />
        </div>

        <TableWrapper className="my-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S/N</TableHead>
                <TableHead>Sender</TableHead>
                <TableHead>Receipt</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>{membersDummies[0].name}</TableCell>
                <TableCell>ER45677</TableCell>
                <TableCell>{formatMoney(10000)}</TableCell>
                <TableCell>{convertStringToDate("2026-05-24")}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableWrapper>
      </AppContentBody>
    </AppContentContainer>
  );
}

function FinanceStatCard({
  title,
  statValue,
}: {
  title: string;
  statValue: number;
}) {
  return (
    <div className="bg-slate-300/30 p-3 rounded-xl w-48">
      <div className="flex flex-col gap-5 text-gray-600">
        <span className="text-xl">{shortenNumber(statValue)}</span>
        <span className="text-xs">{title}</span>
      </div>
    </div>
  );
}
