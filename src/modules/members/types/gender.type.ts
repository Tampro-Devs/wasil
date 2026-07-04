import type { SelectOption } from "../../../shared/components/form/fields/app.select.field";

export interface Gender extends SelectOption {
  label: "Male" | "Female";
  value: "male" | "female";
}

export const genders: Gender[] = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];
