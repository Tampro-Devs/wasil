import { streetDummies, type Street } from "../../configs/types/street.type";
import {
  branchDummies,
  type Branch,
} from "../../organization/types/branch.type";

interface MemberResidence {
  houseNo: number;
  street: Street;
}

export interface Member {
  memberId: string;
  name: string;
  gender: "Male" | "Female";
  email: string;
  phone: string;
  dob: string;
  branch?: Branch;
  residence: MemberResidence;
}

export const membersDummies: Member[] = [
  {
    memberId: "Member-01",
    name: "Abubakr Salim Mwinyi",
    email: "abubakr.mwinyi@gmail.com",
    phone: "+255712345678",
    dob: "1990-04-03",
    // branch: branchDummies[0],
    residence: {
      houseNo: 23,
      street: streetDummies[0],
    },
    gender: "Male",
  },
  {
    memberId: "Member-02",
    name: "Fatuma Hassan Ally",
    email: "fatuma.ally@gmail.com",
    phone: "+255723456789",
    dob: "1970-04-03",
    // branch: branchDummies[0],
    residence: {
      houseNo: 10,
      street: streetDummies[0],
    },
    gender: "Female",
  },
  {
    memberId: "Member-03",
    name: "Omar Juma Kikwete",
    email: "omar.kikwete@gmail.com",
    phone: "+255734567890",
    dob: "1989-12-03",
    // branch: branchDummies[0],
    residence: {
      houseNo: 1,
      street: streetDummies[0],
    },
    gender: "Male",
  },
  {
    memberId: "Member-04",
    name: "Mariam Abdalla Rashid",
    email: "mariam.rashid@gmail.com",
    phone: "+255745678901",
    dob: "1990-03-14",
    // branch: branchDummies[0],
    residence: {
      houseNo: 30,
      street: streetDummies[0],
    },
    gender: "Female",
  },
  {
    memberId: "Member-05",
    name: "Yusuf Hamisi Msigwa",
    email: "yusuf.msigwa@gmail.com",
    phone: "+255756789012",
    dob: "1985-05-20",
    // branch: branchDummies[0],
    residence: {
      houseNo: 2,
      street: streetDummies[0],
    },
    gender: "Male",
  },
  {
    memberId: "Member-06",
    name: "Zainab Idris Kombo",
    email: "zainab.kombo@gmail.com",
    phone: "+255767890123",
    dob: "1987-04-30",
    // branch: branchDummies[0],
    residence: {
      houseNo: 4,
      street: streetDummies[0],
    },
    gender: "Female",
  },
  {
    memberId: "Member-07",
    name: "Khalid Nuhu Tambwe",
    email: "khalid.tambwe@gmail.com",
    phone: "+255778901234",
    dob: "1984-04-15",
    // branch: branchDummies[0],
    residence: {
      houseNo: 5,
      street: streetDummies[0],
    },
    gender: "Male",
  },
  {
    memberId: "Member-08",
    name: "Safia Mtumwa Seif",
    email: "safia.seif@gmail.com",
    phone: "+255789012345",
    dob: "1981-11-03",
    // branch: branchDummies[0],
    residence: {
      houseNo: 8,
      street: streetDummies[0],
    },
    gender: "Female",
  },
  {
    memberId: "Member-09",
    name: "Ibrahim Suleiman Mgeni",
    email: "ibrahim.mgeni@gmail.com",
    phone: "+255790123456",
    dob: "1983-04-25",
    // branch: branchDummies[0],
    residence: {
      houseNo: 6,
      street: streetDummies[0],
    },
    gender: "Male",
  },
  {
    memberId: "Member-10",
    name: "Rehema Bakari Chande",
    email: "rehema.chande@gmail.com",
    phone: "+255701234567",
    dob: "1990-06-03",
    // branch: branchDummies[0],
    residence: {
      houseNo: 30,
      street: streetDummies[0],
    },
    gender: "Female",
  },
];
