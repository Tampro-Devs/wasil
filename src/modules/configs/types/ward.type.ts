import { districtDummies, type District } from "./district.type";

export interface Ward {
  ward_id: string;
  name: string;
  district: District | null;
}

export const wardDummies: Ward[] = [
  { ward_id: "D-01", name: "Mazimbu", district: districtDummies[0] },
  { ward_id: "D-02", name: "Mji Mkuu", district: districtDummies[0] },
  { ward_id: "D-03", name: "Mbuyuni", district: districtDummies[0] },
  { ward_id: "D-04", name: "Kilakala", district: districtDummies[0] },
  { ward_id: "D-05", name: "Kichangani", district: districtDummies[0] },
];
