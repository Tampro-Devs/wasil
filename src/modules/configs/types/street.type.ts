import { wardDummies, type Ward } from "./ward.type";

export interface Street {
  street_id: string;
  name: string;
  ward: Ward | null;
}

export const streetDummies: Street[] = [
  { street_id: "D-01", name: "Mazimbu Darajani", ward: wardDummies[0] },
  { street_id: "D-02", name: "Modecco A", ward: wardDummies[0] },
  { street_id: "D-03", name: "Modecco B", ward: wardDummies[0] },
  { street_id: "D-04", name: "Nguzo", ward: wardDummies[0] },
  { street_id: "D-05", name: "Reli", ward: wardDummies[0] },
];
