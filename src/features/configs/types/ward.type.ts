import { districtDummies, type District } from "./district.type";

export interface Ward {
  wardId: string;
  name: string;
  district: District;
}

export const wardDummies: Ward[] = [
  { wardId: "D-01", name: "Mazimbu", district: districtDummies[0] },
  { wardId: "D-02", name: "Mji Mkuu", district: districtDummies[0] },
  { wardId: "D-03", name: "Mbuyuni", district: districtDummies[0] },
  { wardId: "D-04", name: "Kilakala", district: districtDummies[0] },
  { wardId: "D-05", name: "Kichangani", district: districtDummies[0] },
];
