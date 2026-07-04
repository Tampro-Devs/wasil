export const apiQueryKeys = {
  // EDUCATION KEYS
  educationLevels: ["educationLevels"] as const,
  educationLevel: (levelId: string) => ["educationLevel", levelId] as const,

  regions: ["regions"] as const,
  region: (regionId: string) => ["region", regionId] as const,

  districts: ["districts"] as const,
  district: (districtId: string) => ["district", districtId] as const,

  wards: ["wards"] as const,
  ward: (wardId: string) => ["ward", wardId] as const,

  streets: ["streets"] as const,
  street: (streetId: string) => ["street", streetId] as const,
};
