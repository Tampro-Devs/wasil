import z from "zod";

export const leaderSchema = z.object({
  member: z.string().trim().nonempty("This field is required"),
  leadership: z.string().trim().nonempty("This field is required"),
  type: z.string().trim().nonempty("This field is required"),
  branch: z.string().optional().nullable(),
  district: z.string().optional().nullable(),
  ward: z.string().optional().nullable(),
  street: z.string().optional().nullable(),
});

export type LeaderFormValues = z.infer<typeof leaderSchema>;

export const defaultLeaderValues: LeaderFormValues = {
  member: "",
  leadership: "",
  type: "",
};

export const branchLeaderSchema = z.object({
  member: z.string().trim().nonempty("This field is required"),
  branch: z.string().trim().nonempty("This field is required"),
  leadership: z.string().trim().nonempty("This field is required"),
  type: z.string().trim().nonempty("This field is required"),
});

export type BranchLeaderFormValues = z.infer<typeof branchLeaderSchema>;

export const defaultBranchLeaderValues: BranchLeaderFormValues = {
  member: "",
  branch: "",
  leadership: "",
  type: "",
};
