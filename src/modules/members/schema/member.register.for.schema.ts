import z from "zod";

export const memberRegisterFormSchema = z.object({
  first_name: z.string().trim().nonempty("This field is required"),
  middle_name: z.string().trim().nonempty("This field is required"),
  last_name: z.string().trim().nonempty("This field is required"),
  gender: z.string().trim().nonempty("Gender is required"),
  dob: z.string().trim().nonempty("Date of birth is required"),
  phone: z.string().trim().nonempty("Member phone is required"),
  email: z.email().trim().nonempty("Member email is required"),
  branch: z.string().trim().nonempty("Region is required"),
  district: z.string().trim().nonempty("District is required"),
  ward: z.string().trim().nonempty("Ward is required"),
  residence: z.string().trim().nonempty("Street is required"),
  house_no: z.string().trim().nonempty("House number is required"),
  edu_level: z.string().trim().nonempty("Education level is required"),
  proffession: z.string().trim().nonempty("Proffession is required"),
  work_title: z.string().trim().nonempty("Work title is required"),
  institution: z.string().trim().nullable(),
  has_permanent_residence: z.boolean(),
});

export type MemberRegisterFormValues = z.infer<typeof memberRegisterFormSchema>;

export const defaultMemberRegisterFormValues: MemberRegisterFormValues = {
  first_name: "",
  middle_name: "",
  last_name: "",
  gender: "",
  dob: "",
  phone: "",
  email: "",
  branch: "",
  district: "",
  ward: "",
  residence: "",
  house_no: "",
  edu_level: "",
  proffession: "",
  work_title: "",
  institution: null,
  has_permanent_residence: false,
};
