import { regionDummies, type Region } from "./region.type";

export interface District {
  districtId: string;
  name: string;
  region: Region;
}

export const districtDummies: District[] = [
  { districtId: "D-01", name: "Morogoro Mjini", region: regionDummies[4] },
  { districtId: "D-02", name: "Gairo", region: regionDummies[4] },
  { districtId: "D-03", name: "Kilombero", region: regionDummies[4] },
  { districtId: "D-04", name: "Mvomero", region: regionDummies[4] },
  { districtId: "D-05", name: "Kilosa", region: regionDummies[4] },
];
