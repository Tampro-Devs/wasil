import type { District } from "../../configs/types/district.type";
import type { EducationLevel } from "../../configs/types/education.type";
import type { Region } from "../../configs/types/region.type";
import { type Street } from "../../configs/types/street.type";
import type { Ward } from "../../configs/types/ward.type";
import { type Branch } from "../../organization/types/branch.type";
import type { User } from "../../users/types/user.type";

export interface Member {
  user: User;
  member_id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: "Male" | "Female";
  email: string;
  phone: string;
  status: number;
  dob: string;
  branch?: Branch;
  house_no: number;
  residence: Street;
}

export interface MemberInfo {
  user: User;
  member_id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: "Male" | "Female";
  email: string;
  phone: string;
  status: string;
  dob: string;
  branch?: Branch;
  house_no: number;
  region: Region;
  district: District;
  ward: Ward;
  residence: Street;
  has_permanent_residence: boolean;
  proffession: string;
  work_title: string;
  institution: string;
  edu_level?: EducationLevel;
}
