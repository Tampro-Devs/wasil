import type { SelectOption } from "../../../shared/components/form/fields/app.select.field";

export type EducationLevel = {
  level_id: string;
  name: string;
  category: "Sharia" | "Secular";
  members: number;
  proffessionalism: string;
};

// export const educationLevelsDummies: EducationLevel[] = [
//   // Secular Studies
//   {
//     levelId: "SEC-01",
//     title: "Primary Education",
//     category: "Secular",
//     members: 0,
//     isProffessional: false,
//   },
//   {
//     levelId: "SEC-02",
//     title: "Ordinary Level (O-Level)",
//     category: "Secular",
//     members: 0,
//     isProffessional: false,
//   },
//   {
//     levelId: "SEC-03",
//     title: "Advanced Level (A-Level)",
//     category: "Secular",
//     members: 0,
//     isProffessional: false,
//   },
//   {
//     levelId: "SEC-04",
//     title: "Certificate",
//     category: "Secular",
//     members: 0,
//     isProffessional: true,
//   },
//   {
//     levelId: "SEC-05",
//     title: "Diploma",
//     category: "Secular",
//     members: 0,
//     isProffessional: true,
//   },
//   {
//     levelId: "SEC-06",
//     title: "Bachelor's Degree",
//     category: "Secular",
//     members: 0,
//     isProffessional: true,
//   },
//   {
//     levelId: "SEC-07",
//     title: "Postgraduate Diploma",
//     category: "Secular",
//     members: 0,
//     isProffessional: true,
//   },
//   {
//     levelId: "SEC-08",
//     title: "Master's Degree",
//     category: "Secular",
//     members: 0,
//     isProffessional: true,
//   },
//   {
//     levelId: "SEC-09",
//     title: "Doctorate (PhD)",
//     category: "Secular",
//     members: 0,
//     isProffessional: true,
//   },

//   // Islamic Studies
//   {
//     levelId: "ISL-01",
//     title: "Madrasa (Basic Quranic)",
//     category: "Sharia",
//     members: 0,
//     isProffessional: false,
//   },
//   {
//     levelId: "ISL-02",
//     title: "Hifdhul Quran (Memorization)",
//     category: "Sharia",
//     members: 0,
//     isProffessional: false,
//   },
//   {
//     levelId: "ISL-03",
//     title: "Msingi wa Dini (Islamic Foundation)",
//     category: "Sharia",
//     members: 0,
//     isProffessional: false,
//   },
//   {
//     levelId: "ISL-04",
//     title: "Thanawi (Islamic Secondary)",
//     category: "Sharia",
//     members: 0,
//     isProffessional: true,
//   },
//   {
//     levelId: "ISL-05",
//     title: "Diploma in Islamic Studies",
//     category: "Sharia",
//     members: 0,
//     isProffessional: true,
//   },
//   {
//     levelId: "ISL-06",
//     title: "Ijaza (Scholarly Authorization)",
//     category: "Sharia",
//     members: 0,
//     isProffessional: true,
//   },
//   {
//     levelId: "ISL-07",
//     title: "Bachelor of Islamic Sharia",
//     category: "Sharia",
//     members: 0,
//     isProffessional: true,
//   },
//   {
//     levelId: "ISL-08",
//     title: "Master of Islamic Studies",
//     category: "Sharia",
//     members: 0,
//     isProffessional: true,
//   },
//   {
//     levelId: "ISL-09",
//     title: "Doctorate in Islamic Sciences",
//     category: "Sharia",
//     members: 0,
//     isProffessional: true,
//   },
// ];

export const educationLevels: SelectOption[] = [
  // Secular Studies
  {
    value: "SEC-01",
    label: "Primary Education",
  },
  {
    value: "SEC-02",
    label: "Ordinary Level (O-Level)",
  },
  {
    value: "SEC-03",
    label: "Advanced Level (A-Level)",
  },
  {
    value: "SEC-04",
    label: "Certificate",
  },
  {
    value: "SEC-05",
    label: "Diploma",
  },
  {
    value: "SEC-06",
    label: "Bachelor's Degree",
  },
  {
    value: "SEC-07",
    label: "Postgraduate Diploma",
  },
  {
    value: "SEC-08",
    label: "Master's Degree",
  },
  {
    value: "SEC-09",
    label: "Doctorate (PhD)",
  },

  // Islamic Studies
  {
    value: "ISL-01",
    label: "Madrasa (Basic Quranic)",
  },
  {
    value: "ISL-02",
    label: "Hifdhul Quran (Memorization)",
  },
  {
    value: "ISL-03",
    label: "Msingi wa Dini (Islamic Foundation)",
  },
  {
    value: "ISL-04",
    label: "Thanawi (Islamic Secondary)",
  },
  {
    value: "ISL-05",
    label: "Diploma in Islamic Studies",
  },
  {
    value: "ISL-06",
    label: "Ijaza (Scholarly Authorization)",
  },
  {
    value: "ISL-07",
    label: "Bachelor of Islamic Sharia",
  },
  {
    value: "ISL-08",
    label: "Master of Islamic Studies",
  },
  {
    value: "ISL-09",
    label: "Doctorate in Islamic Sciences",
  },
];
