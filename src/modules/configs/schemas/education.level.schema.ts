import z from "zod";

export const educationLevelSchema = z.object({
  level_id: z.string().optional(),
  name: z.string().trim().nonempty("Name is required"),
  category: z.string().trim().nonempty("Category is required"),
  proffessionalism: z.string().trim().nonempty("Proffesionalism is required"),
});

export type EducationLevelFormValues = z.infer<typeof educationLevelSchema>;

export const defaultEducationLevelValues: EducationLevelFormValues = {
  name: "",
  category: "",
  proffessionalism: "",
};
