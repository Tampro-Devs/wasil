import z from "zod";

export const branchSchema = z.object({
  name: z.string().trim().nonempty("You must provide branch name"),
  region: z.string().trim().nonempty("You must select Region"),
  leader: z.string().trim(),
  assistant: z.string().trim(),
});

export type BranchFormValues = z.infer<typeof branchSchema>;

export const defaultBranchValues: BranchFormValues = {
  name: "",
  region: "",
  leader: "",
  assistant: "",
};
