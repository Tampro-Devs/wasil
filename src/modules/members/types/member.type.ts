import { type Street } from "../../configs/types/street.type";
import { type Branch } from "../../organization/types/branch.type";
import type { User } from "../../users/types/user.type";

export interface Member {
  user: User;
  memberId: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: "Male" | "Female";
  email: string;
  phone: string;
  dob: string;
  branch?: Branch;
  house_no: number;
  residence: Street;
}

export const membersDummies: Member[] = [];
