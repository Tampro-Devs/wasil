export type EducationLevel = {
  levelId: string;
  title: string;
  category: "Sharia" | "Secular";
  members: number;
  isProffessional: boolean;
};

export const educationLevelsDummies: EducationLevel[] = [
  // Secular Studies
  {
    levelId: "SEC-01",
    title: "Primary Education",
    category: "Secular",
    members: 0,
    isProffessional: false,
  },
  {
    levelId: "SEC-02",
    title: "Ordinary Level (O-Level)",
    category: "Secular",
    members: 0,
    isProffessional: false,
  },
  {
    levelId: "SEC-03",
    title: "Advanced Level (A-Level)",
    category: "Secular",
    members: 0,
    isProffessional: false,
  },
  {
    levelId: "SEC-04",
    title: "Certificate",
    category: "Secular",
    members: 0,
    isProffessional: true,
  },
  {
    levelId: "SEC-05",
    title: "Diploma",
    category: "Secular",
    members: 0,
    isProffessional: true,
  },
  {
    levelId: "SEC-06",
    title: "Bachelor's Degree",
    category: "Secular",
    members: 0,
    isProffessional: true,
  },
  {
    levelId: "SEC-07",
    title: "Postgraduate Diploma",
    category: "Secular",
    members: 0,
    isProffessional: true,
  },
  {
    levelId: "SEC-08",
    title: "Master's Degree",
    category: "Secular",
    members: 0,
    isProffessional: true,
  },
  {
    levelId: "SEC-09",
    title: "Doctorate (PhD)",
    category: "Secular",
    members: 0,
    isProffessional: true,
  },

  // Islamic Studies
  {
    levelId: "ISL-01",
    title: "Madrasa (Basic Quranic)",
    category: "Sharia",
    members: 0,
    isProffessional: false,
  },
  {
    levelId: "ISL-02",
    title: "Hifdhul Quran (Memorization)",
    category: "Sharia",
    members: 0,
    isProffessional: false,
  },
  {
    levelId: "ISL-03",
    title: "Msingi wa Dini (Islamic Foundation)",
    category: "Sharia",
    members: 0,
    isProffessional: false,
  },
  {
    levelId: "ISL-04",
    title: "Thanawi (Islamic Secondary)",
    category: "Sharia",
    members: 0,
    isProffessional: true,
  },
  {
    levelId: "ISL-05",
    title: "Diploma in Islamic Studies",
    category: "Sharia",
    members: 0,
    isProffessional: true,
  },
  {
    levelId: "ISL-06",
    title: "Ijaza (Scholarly Authorization)",
    category: "Sharia",
    members: 0,
    isProffessional: true,
  },
  {
    levelId: "ISL-07",
    title: "Bachelor of Islamic Sharia",
    category: "Sharia",
    members: 0,
    isProffessional: true,
  },
  {
    levelId: "ISL-08",
    title: "Master of Islamic Studies",
    category: "Sharia",
    members: 0,
    isProffessional: true,
  },
  {
    levelId: "ISL-09",
    title: "Doctorate in Islamic Sciences",
    category: "Sharia",
    members: 0,
    isProffessional: true,
  },
];
