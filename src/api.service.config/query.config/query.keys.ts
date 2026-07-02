export const apiQueryKeys = {
  // EDUCATION KEYS
  educationLevels: ["educationLevels"] as const,
  educationLevel: (levelId: string) => ["educationLevel", levelId] as const,

  regions: ["regions"] as const,
  region: (regionId: string) => ["region", regionId] as const,
};
