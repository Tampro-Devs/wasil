import z from "zod";

export const memberRegisterFormSchema = z.object({
  name: z.string().trim().nonempty("Member name is required"),
  gender: z.string().trim().nonempty("Gender is required"),
  dob: z.string().trim().nonempty("Date of birth is required"),
  phone: z.string().trim().nonempty("Member phone is required"),
  email: z.email().trim().nonempty("Member email is required"),
  regionId: z.string().trim().nonempty("Region is required"),
  districtId: z.string().trim().nonempty("District is required"),
  wardId: z.string().trim().nonempty("Ward is required"),
  streetId: z.string().trim().nonempty("Street is required"),
  houseNo: z.string().trim().nonempty("House number is required"),
  educationLevel: z.string().trim().nonempty("Education level is required"),
  profession: z.string().trim().nonempty("Profession is required"),
  title: z.string().trim().nonempty("Work title is required"),
  institution: z.string().trim().nonempty("Institution is required"),
  residenceCategory: z
    .string()
    .trim()
    .nonempty("You should select residence category"),
});

export type MemberRegisterFormValues = z.infer<typeof memberRegisterFormSchema>;

export const defaultMemberRegisterFormValues: MemberRegisterFormValues = {
  name: "",
  gender: "",
  dob: "",
  phone: "",
  email: "",
  regionId: "",
  districtId: "",
  wardId: "",
  streetId: "",
  houseNo: "",
  educationLevel: "",
  profession: "",
  title: "",
  institution: "",
  residenceCategory: "",
};
