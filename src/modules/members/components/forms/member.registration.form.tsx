import { useNavigate } from "react-router-dom";
import {
  defaultMemberRegisterFormValues,
  memberRegisterFormSchema,
  type MemberRegisterFormValues,
} from "../../schema/member.register.for.schema";
import { useForm } from "react-hook-form";
import { genders } from "../../types/gender.type";
import { districts, regions, streets, wards } from "../../../configs/data";
import { educationLevels } from "../../../configs/types/education.type";
import { AppSubmitButton } from "../../../../shared/components/app.button";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppFormProvider } from "../../../../shared/components/form";
import { AppTextField } from "../../../../shared/components/form/fields/app.text.field";
import { AppSelectField } from "../../../../shared/components/form/fields/app.select.field";
import { AppDatePicker } from "../../../../shared/components/form/fields/date.picker/app.date.picker";
import { AppCheckboxField } from "../../../../shared/components/form/fields/app.checkbox.field";

export default function MemberRegistrationForm() {
  const navigate = useNavigate();
  const form = useForm<MemberRegisterFormValues>({
    resolver: zodResolver(memberRegisterFormSchema),
    defaultValues: defaultMemberRegisterFormValues,
  });

  async function onSubmit(data: MemberRegisterFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
    navigate(-1);
  }
  return (
    <AppFormProvider {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col mb-3">
          <div className="flex items-center gap-1 mb-2">
            <span className="font-bold text-sm">Primary Details</span>
            <div className="flex-1 border-b-2 border-b-slate-300"></div>
          </div>
          <AppTextField
            control={form.control}
            name="name"
            label="Name"
            className="w-full md:w-9/12"
          />
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <div className="flex-1">
              <AppSelectField
                control={form.control}
                label="Gender"
                name="gender"
                placeholder="Select..."
                widthClass="w-full"
                options={genders}
              />
            </div>

            <div className="flex-1">
              <AppDatePicker
                control={form.control}
                label="Date of birth"
                name="dob"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <div className="flex-1">
              <AppTextField
                control={form.control}
                name="phone"
                label="Phone"
                placeholder="+2550000000"
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <AppTextField
                control={form.control}
                type="email"
                name="email"
                label="Email"
                placeholder="member@email.com"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <div className="flex items-center gap-1 mb-2">
            <span className="font-bold text-sm">Residence Details</span>
            <div className="flex-1 border-b-2 border-b-slate-300"></div>
          </div>

          <AppCheckboxField
            control={form.control}
            name="residenceCategory"
            label="This is the permanent residence"
          />
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <div className="flex-1">
              <AppSelectField
                control={form.control}
                name="regionId"
                label="Region"
                placeholder="Select..."
                widthClass="w-full"
                options={regions}
              />
            </div>
            <div className="flex-1">
              <AppSelectField
                control={form.control}
                name="districtId"
                label="District"
                placeholder="Select..."
                widthClass="w-full"
                options={districts}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <div className="flex-1">
              <AppSelectField
                control={form.control}
                name="wardId"
                label="Ward"
                placeholder="Select..."
                widthClass="w-full"
                options={wards}
              />
            </div>
            <div className="flex-1">
              <AppSelectField
                control={form.control}
                name="streetId"
                label="Street"
                placeholder="Select..."
                widthClass="w-full"
                options={streets}
              />
            </div>
          </div>
          <AppTextField
            control={form.control}
            name="houseNo"
            label="House no."
            className="w-full sm:w-1/2"
          />
        </div>

        <div className="flex flex-col mb-3">
          <div className="flex items-center gap-1 mb-2">
            <span className="font-bold text-sm">Professional Details</span>
            <div className="flex-1 border-b-2 border-b-slate-300"></div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <div className="flex-1">
              <AppSelectField
                control={form.control}
                name="educationLevel"
                label="Highest Level of Education"
                placeholder="Select..."
                widthClass="w-full"
                options={educationLevels}
              />
            </div>
            <div className="flex-1">
              <AppTextField
                control={form.control}
                name="profession"
                label="Proffesion"
                placeholder="e.g. Bsc. with Education"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <div className="flex-1">
              <AppTextField
                control={form.control}
                name="title"
                label="Work Title"
                placeholder="e.g. Manager, HoD"
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <AppTextField
                control={form.control}
                name="institution"
                label="Institution"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <AppSubmitButton label="Submit" />
      </form>
    </AppFormProvider>
  );
}
