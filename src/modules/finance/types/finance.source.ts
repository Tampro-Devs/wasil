import type { SelectOption } from "../../../shared/components/form/fields/app.select.field";

export type FinanceSource = "FUNDS" | "MEMBERSHIP_FEE";

export interface FinanceSourceConfig {
  label: string;
  bgColor: string;
}

// export const financeSources: Record<FinanceSource, FinanceSourceConfig> = {
//   FUNDS: { label: "FUNDS", bgColor: "" },
//   MEMBERSHIP_FEE: { label: "MEMBERSHIP_FEE", bgColor: "" },
// };

export const financeSources: SelectOption[] = [
  { value: "MEMBERSHIP_FEE", label: "Membership Fee" },
  { value: "FUNDS", label: "Funds" },
];
