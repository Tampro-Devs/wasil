import { useNavigate } from "react-router-dom";
import { AppForm } from "../../../../shared/components/app.form";
import {
  defaultMemberRegisterFormValues,
  memberRegisterFormSchema,
  type MemberRegisterFormValues,
} from "../../schema/member.register.for.schema";
import type { SubmitHandler } from "react-hook-form";
import {
  AppSelectField,
  AppCheckboxField,
  AppTextField,
} from "../../../../shared/components/app.form.fields";
import DatePicker from "../../../../shared/components/app.date.picker";
import { genders } from "../../types/gender.type";
import { districts, regions, streets, wards } from "../../../configs/data";
import { educationLevels } from "../../../configs/types/education.type";
import { AppSubmitButton } from "../../../../shared/components/app.button";

export default function MemberRegistrationForm() {
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<MemberRegisterFormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
    navigate(-1);
  };
  return (
    <AppForm<MemberRegisterFormValues>
      schema={memberRegisterFormSchema}
      defaultValues={defaultMemberRegisterFormValues}
      onSubmit={onSubmit}
      className="w-full"
    >
      <div className="w-full flex flex-col mb-3">
        <div className="flex items-center gap-1 mb-2">
          <span className="font-bold text-sm">Primary Details</span>
          <div className="flex-1 border-b-2 border-b-slate-300"></div>
        </div>
        <AppTextField<MemberRegisterFormValues>
          name="name"
          label="Name"
          className="w-full md:w-9/12"
        />
        <div className="flex flex-col sm:flex-row sm:gap-2">
          <div className="flex-1">
            <AppSelectField<MemberRegisterFormValues>
              label="Gender"
              name="gender"
              placeholder="Select..."
              widthClass="w-full"
              options={genders}
            />
          </div>

          <div className="flex-1">
            <DatePicker<MemberRegisterFormValues>
              label="Date of birth"
              name="dob"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          <div className="flex-1">
            <AppTextField<MemberRegisterFormValues>
              name="phone"
              label="Phone"
              placeholder="+2550000000"
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <AppTextField<MemberRegisterFormValues>
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

        <AppCheckboxField<MemberRegisterFormValues>
          name="residenceCategory"
          label="This is the permanent residence"
        />
        <div className="flex flex-col sm:flex-row sm:gap-2">
          <div className="flex-1">
            <AppSelectField<MemberRegisterFormValues>
              name="regionId"
              label="Region"
              placeholder="Select..."
              widthClass="w-full"
              options={regions}
            />
          </div>
          <div className="flex-1">
            <AppSelectField<MemberRegisterFormValues>
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
            <AppSelectField<MemberRegisterFormValues>
              name="wardId"
              label="Ward"
              placeholder="Select..."
              widthClass="w-full"
              options={wards}
            />
          </div>
          <div className="flex-1">
            <AppSelectField<MemberRegisterFormValues>
              name="streetId"
              label="Street"
              placeholder="Select..."
              widthClass="w-full"
              options={streets}
            />
          </div>
        </div>
        <AppTextField<MemberRegisterFormValues>
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
            <AppSelectField<MemberRegisterFormValues>
              name="educationLevel"
              label="Highest Level of Education"
              placeholder="Select..."
              widthClass="w-full"
              options={educationLevels}
            />
          </div>
          <div className="flex-1">
            <AppTextField<MemberRegisterFormValues>
              name="profession"
              label="Proffesion"
              placeholder="e.g. Bsc. with Education"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          <div className="flex-1">
            <AppTextField<MemberRegisterFormValues>
              name="title"
              label="Work Title"
              placeholder="e.g. Manager, HoD"
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <AppTextField<MemberRegisterFormValues>
              name="institution"
              label="Institution"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <AppSubmitButton label="Submit" />
    </AppForm>
  );
}
