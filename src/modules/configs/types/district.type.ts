import { regionDummies, type Region } from "./region.type";

export interface District {
  district_id: string;
  name: string;
  region: Region | null;
}

export const districtDummies: District[] = [
  { district_id: "D-01", name: "Morogoro Mjini", region: regionDummies[4] },
  { district_id: "D-02", name: "Gairo", region: regionDummies[4] },
  { district_id: "D-03", name: "Kilombero", region: regionDummies[4] },
  { district_id: "D-04", name: "Mvomero", region: regionDummies[4] },
  { district_id: "D-05", name: "Kilosa", region: regionDummies[4] },
];
