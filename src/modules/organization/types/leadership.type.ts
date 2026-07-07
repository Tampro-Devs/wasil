export interface Leadership {
  name: string;
  level: "HQ" | "Branch" | "District" | "Ward" | "Street";
  category: "Leader" | "Assistant";
}

export interface Leader {
  full_name: string;
  member_id: string;
  phone: string;
  email: string;
  gender: string;
  dob: string;
  title: Leadership;
}

export const leadershipDummies: Leadership[] = [];

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
