import type { SelectOption } from "../../../shared/components/form/fields/app.select.field";
import { regionDummies, type Region } from "../../configs/types/region.type";
import { type Leader } from "./leadership.type";

export interface Branch {
  branchId: string;
  name: string;
  location: Region;
  leader?: Leader;
  assistant?: Leader;
  members: number;
}

export const branchDummies: Branch[] = [
  {
    branchId: "Branch-01",
    name: "TAMPRO Morogoro",
    location: regionDummies[4],
    // leader: leadersDummies[0],
    // assistant: leadersDummies[1],
    members: 200,
  },
];

export const branches: SelectOption[] = [
  { label: "TAMPRO Morogoro", value: "Branch-01" },
  { label: "TAMPRO Dar es salaam", value: "Branch-02" },
];
