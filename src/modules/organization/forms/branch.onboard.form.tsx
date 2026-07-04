import { useForm } from "react-hook-form";

import {
  branchSchema,
  defaultBranchValues,
  type BranchFormValues,
} from "../schemas/branch.form.schema";
import { AppSubmitButton } from "../../../shared/components/app.button";

import { regions } from "../../configs/data";
import {
  AppSelectField,
  type SelectOption,
} from "../../../shared/components/form/fields/app.select.field";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppFormProvider } from "../../../shared/components/form";
import { AppTextField } from "../../../shared/components/form/fields/app.text.field";

const members: SelectOption[] = [
  {
    value: "Member-01",
    label: "Abubakr Salim Mwinyi",
  },
  {
    value: "Member-02",
    label: "Fatuma Hassan Ally",
  },
  {
    value: "Member-03",
    label: "Omar Juma Kikwete",
  },
  {
    value: "Member-04",
    label: "Mariam Abdalla Rashid",
  },
  {
    value: "Member-05",
    label: "Yusuf Hamisi Msigwa",
  },
  {
    value: "Member-06",
    label: "Zainab Idris Kombo",
  },
  {
    value: "Member-07",
    label: "Khalid Nuhu Tambwe",
  },
  {
    value: "Member-08",
    label: "Safia Mtumwa Seif",
  },
  {
    value: "Member-09",
    label: "Ibrahim Suleiman Mgeni",
  },
  {
    value: "Member-10",
    label: "Rehema Bakari Chande",
  },
];
export default function BranchOnboardForm() {
  const form = useForm<BranchFormValues>({
    resolver: zodResolver(branchSchema),
    defaultValues: defaultBranchValues,
  });

  async function onSubmit(data: BranchFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
  }
  return (
    <AppFormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AppTextField
          control={form.control}
          label="Branch Name"
          name="name"
          placeholder="Branch Name"
        />
        <AppSelectField
          control={form.control}
          label="Branch Location"
          name="region"
          placeholder="Select..."
          options={regions}
        />
        <AppSelectField
          control={form.control}
          label="Branch Leader"
          name="leader"
          placeholder="Select..."
          options={members}
        />
        <AppSelectField
          control={form.control}
          label="Branch Assistant Leader"
          name="assistant"
          placeholder="Select..."
          options={members}
        />
        <AppSubmitButton label="Submit" className="w-32 mt-5" />
      </form>
    </AppFormProvider>
  );
}
