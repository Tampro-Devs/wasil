import z from "zod";

export const memberContributionFilterSchema = z.object({
  receipt: z.string().trim(),
});

export type MemberContributionFilterFormValues = z.infer<
  typeof memberContributionFilterSchema
>;

export const defaultMemberContributionFilterFormValues: MemberContributionFilterFormValues =
  {
    receipt: "",
  };
