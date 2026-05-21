export interface MemberContribution {
  receipt: string;
  amount: number;
  date: string;
}

export const memberContributionDummies: MemberContribution[] = [
  {
    receipt: "TMP456789",
    amount: 10000,
    date: "Jan 02, 2026",
  },
  {
    receipt: "TMP4560987",
    amount: 10000,
    date: "Feb 02, 2026",
  },
  {
    receipt: "TMP765345",
    amount: 10000,
    date: "Mar 02, 2026",
  },
  {
    receipt: "TMP020202",
    amount: 10000,
    date: "Apr 02, 2026",
  },
  {
    receipt: "TMP8237823",
    amount: 10000,
    date: "May 02, 2026",
  },
];
