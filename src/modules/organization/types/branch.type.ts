import type { SelectOption } from "../../../shared/components/form/fields/app.select.field";
import { type Region } from "../../configs/types/region.type";
import { type Leader } from "./leadership.type";

export interface Branch {
  branch_id: string;
  name: string;
  location: Region;
  leader?: Leader;
  assistant_leader?: Leader;
  total_members: number;
}

export const branches: SelectOption[] = [
  { label: "TAMPRO Morogoro", value: "Branch-01" },
  { label: "TAMPRO Dar es salaam", value: "Branch-02" },
];
