import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AppSubmitButton } from "../../../shared/components/app.button";
import {
  AppContentBody,
  AppContentContainer,
} from "../../../shared/components/app.content.container";
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
import { AppDatePicker } from "../../../shared/components/form/fields/date.picker/app.date.picker";
import { AppSelectField } from "../../../shared/components/form/fields/app.select.field";
import { AppFormProvider } from "../../../shared/components/form";

export default function FinanceMainPage() {
  const form = useForm<FinanceFilterFormValues>({
    resolver: zodResolver(financeFilterSchema),
    defaultValues: defaultFinanceFilterValues,
  });

  async function onSubmit(data: FinanceFilterFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
  }
  setPageHeader("Finance");
  return (
    <AppContentContainer>
      <AppContentBody>
        <AppFormProvider {...form}>
          <form className="w-full my-3" onSubmit={form.handleSubmit(onSubmit)}>
            <AppDatePicker
              control={form.control}
              name="date"
              className="w-full mb-3"
            />
            <div className="w-full flex flex-col sm:flex-wrap sm:flex-row gap-3">
              <AppSelectField
                control={form.control}
                name="source"
                placeholder="Select Source"
                widthClass="w-full sm:flex-1 lg:w-60"
                options={financeSources}
              />
              <AppSelectField
                control={form.control}
                name="region"
                placeholder="Select Region"
                widthClass="w-full sm:flex-1 lg:w-60"
                options={regions}
              />
              <AppSelectField
                control={form.control}
                name="district"
                placeholder="Select Districts"
                widthClass="w-full sm:flex-1 lg:w-60"
                options={districts}
              />
              <AppSelectField
                control={form.control}
                name="ward"
                placeholder="Select Wards"
                widthClass="w-full sm:flex-1 lg:w-60"
                options={wards}
              />
              <AppSubmitButton label="Submit" className="h-10" />
            </div>
          </form>
        </AppFormProvider>

        <div className="flex flex-wrap my-5 gap-5">
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
    <div className="w-full sm:w-48 bg-slate-300/30 p-3 rounded-xl">
      <div className="flex flex-col gap-5 text-gray-600">
        <span className="text-xl">{shortenNumber(statValue)}</span>
        <span className="text-xs">{title}</span>
      </div>
    </div>
  );
}
