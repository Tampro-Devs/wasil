import type { Branch } from "../../organization/types/branch.type";

export interface Member {
  memberId: string;
  name: string;
  email: string;
  phone: string;
  //   branch: Branch;
}

export const membersDummies: Member[] = [
  {
    memberId: "Member-01",
    name: "Abubakr Salim Mwinyi",
    email: "abubakr.mwinyi@gmail.com",
    phone: "+255712345678",
  },
  {
    memberId: "Member-02",
    name: "Fatuma Hassan Ally",
    email: "fatuma.ally@gmail.com",
    phone: "+255723456789",
  },
  {
    memberId: "Member-03",
    name: "Omar Juma Kikwete",
    email: "omar.kikwete@gmail.com",
    phone: "+255734567890",
  },
  {
    memberId: "Member-04",
    name: "Mariam Abdalla Rashid",
    email: "mariam.rashid@gmail.com",
    phone: "+255745678901",
  },
  {
    memberId: "Member-05",
    name: "Yusuf Hamisi Msigwa",
    email: "yusuf.msigwa@gmail.com",
    phone: "+255756789012",
  },
  {
    memberId: "Member-06",
    name: "Zainab Idris Kombo",
    email: "zainab.kombo@gmail.com",
    phone: "+255767890123",
  },
  {
    memberId: "Member-07",
    name: "Khalid Nuhu Tambwe",
    email: "khalid.tambwe@gmail.com",
    phone: "+255778901234",
  },
  {
    memberId: "Member-08",
    name: "Safia Mtumwa Seif",
    email: "safia.seif@gmail.com",
    phone: "+255789012345",
  },
  {
    memberId: "Member-09",
    name: "Ibrahim Suleiman Mgeni",
    email: "ibrahim.mgeni@gmail.com",
    phone: "+255790123456",
  },
  {
    memberId: "Member-10",
    name: "Rehema Bakari Chande",
    email: "rehema.chande@gmail.com",
    phone: "+255701234567",
  },
];
