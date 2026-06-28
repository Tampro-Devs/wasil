import type { SubmitHandler } from "react-hook-form";
import { AppForm } from "../../../shared/components/app.form";
import {
  branchSchema,
  defaultBranchValues,
  type BranchFormValues,
} from "../schemas/branch.form.schema";
import { AppSubmitButton } from "../../../shared/components/app.button";
import {
  AppSelectField,
  AppTextField,
  type SelectOption,
} from "../../../shared/components/app.form.fields";
import { regions } from "../../configs/data";

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
  const onSubmit: SubmitHandler<BranchFormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
  };
  return (
    <AppForm<BranchFormValues>
      schema={branchSchema}
      defaultValues={defaultBranchValues}
      onSubmit={onSubmit}
    >
      <AppTextField<BranchFormValues>
        label="Branch Name"
        name="name"
        placeholder="Branch Name"
      />
      <AppSelectField<BranchFormValues>
        label="Branch Location"
        name="region"
        placeholder="Select..."
        options={regions}
      />
      <AppSelectField<BranchFormValues>
        label="Branch Leader"
        name="leader"
        placeholder="Select..."
        options={members}
      />
      <AppSelectField<BranchFormValues>
        label="Branch Assistant Leader"
        name="assistant"
        placeholder="Select..."
        options={members}
      />
      <AppSubmitButton label="Submit" className="w-32 mt-5" />
    </AppForm>
  );
}
