import type { SelectOption } from "../../../shared/components/form/fields/app.select.field";

export interface Gender extends SelectOption {
  label: "Male" | "Female";
  value: "Male" | "Female";
}

export const genders: Gender[] = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];
