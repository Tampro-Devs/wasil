import { wardDummies, type Ward } from "./ward.type";

export interface Street {
  streetId: string;
  name: string;
  ward: Ward;
}

export const streetDummies: Street[] = [
  { streetId: "D-01", name: "Mazimbu Darajani", ward: wardDummies[0] },
  { streetId: "D-02", name: "Modecco A", ward: wardDummies[0] },
  { streetId: "D-03", name: "Modecco B", ward: wardDummies[0] },
  { streetId: "D-04", name: "Nguzo", ward: wardDummies[0] },
  { streetId: "D-05", name: "Reli", ward: wardDummies[0] },
];
