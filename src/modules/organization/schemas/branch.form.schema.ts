import z from "zod";

export const branchSchema = z.object({
  name: z.string().trim().nonempty("You must provide branch name"),
  location_id: z.string().trim().nonempty("You must select Region"),
  leader: z.string().trim().optional(),
  assistant_leader: z.string().trim().optional(),
});

export type BranchFormValues = z.infer<typeof branchSchema>;

export const defaultBranchValues: BranchFormValues = {
  name: "",
  location_id: "",
  leader: "",
  assistant_leader: "",
};
