import { membersDummies, type Member } from "../../members/types/member.type";

export interface Leadership {
  name: string;
  level: "HQ" | "Branch" | "District" | "Ward" | "Street";
  category: "Leader" | "Assistant";
}

export interface Leader {
  member: Member;
  title: Leadership;
}

export const leadershipDummies: Leadership[] = [
  { name: "Amir Mkoa", level: "Branch", category: "Leader" },
  { name: "Naibu Amir Mkoa", level: "Branch", category: "Assistant" },

  { name: "Amir Taifa", level: "HQ", category: "Leader" },
  { name: "Naibu Amir Taifa", level: "HQ", category: "Assistant" },

  { name: "Amir Wilaya", level: "District", category: "Leader" },
  { name: "Naibu Amir Wilaya", level: "District", category: "Assistant" },

  { name: "Amir Kata", level: "Ward", category: "Leader" },
  { name: "Naibu Amir Kata", level: "Ward", category: "Assistant" },

  { name: "Amir Mtaa", level: "Ward", category: "Leader" },
  { name: "Naibu Amir Mtaa", level: "Ward", category: "Assistant" },
];

export const leadersDummies: Leader[] = [
  // { member: membersDummies[0], title: leadershipDummies[0] },
  // { member: membersDummies[2], title: leadershipDummies[1] },
  // { member: membersDummies[6], title: leadershipDummies[2] },
  // { member: membersDummies[8], title: leadershipDummies[3] },
  // { member: membersDummies[4], title: leadershipDummies[4] },
  // { member: membersDummies[5], title: leadershipDummies[5] },
  // { member: membersDummies[6], title: leadershipDummies[6] },
  // { member: membersDummies[7], title: leadershipDummies[7] },
  // { member: membersDummies[8], title: leadershipDummies[8] },
  // { member: membersDummies[9], title: leadershipDummies[9] },
];
