import { useNavigate } from "react-router-dom";
import { AppForm } from "../../../../shared/components/app.form";
import {
  defaultMemberRegisterFormValues,
  memberRegisterFormSchema,
  type MemberRegisterFormValues,
} from "../../schema/member.register.for.schema";
import type { SubmitHandler } from "react-hook-form";
import {
  AppCheckboxField,
  AppSelectField,
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
    >
      <div className="flex flex-col mb-3">
        <div className="flex items-center gap-1 mb-2">
          <span className="font-bold text-sm">Primary Details</span>
          <div className="flex-1 border-b-2 border-b-slate-300"></div>
        </div>
        <AppTextField<MemberRegisterFormValues>
          name="name"
          label="Name"
          className="w-9/12"
        />
        <div className="flex items-center gap-5">
          <AppSelectField<MemberRegisterFormValues>
            label="Gender"
            name="gender"
            placeholder="Select..."
            widthClass="w-96"
            options={genders}
          />
          <DatePicker<MemberRegisterFormValues>
            label="Date of birth"
            name="dob"
            className="w-96"
          />
        </div>
        <div className="flex gap-5">
          <AppTextField<MemberRegisterFormValues>
            name="phone"
            label="Phone"
            placeholder="+2550000000"
            className="w-96"
          />
          <AppTextField<MemberRegisterFormValues>
            type="email"
            name="email"
            label="Email"
            placeholder="member@email.com"
            className="w-96"
          />
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
        <div className="flex gap-5">
          <AppSelectField<MemberRegisterFormValues>
            name="regionId"
            label="Region"
            placeholder="Select..."
            widthClass="w-96"
            options={regions}
          />
          <AppSelectField<MemberRegisterFormValues>
            name="districtId"
            label="District"
            placeholder="Select..."
            widthClass="w-96"
            options={districts}
          />
        </div>
        <div className="flex gap-5">
          <AppSelectField<MemberRegisterFormValues>
            name="wardId"
            label="Ward"
            placeholder="Select..."
            widthClass="w-96"
            options={wards}
          />
          <AppSelectField<MemberRegisterFormValues>
            name="streetId"
            label="Street"
            placeholder="Select..."
            widthClass="w-96"
            options={streets}
          />
        </div>
        <AppTextField<MemberRegisterFormValues>
          name="houseNo"
          label="House no."
          className="w-9/12"
        />
      </div>

      <div className="flex flex-col mb-3">
        <div className="flex items-center gap-1 mb-2">
          <span className="font-bold text-sm">Professional Details</span>
          <div className="flex-1 border-b-2 border-b-slate-300"></div>
        </div>
        <div className="flex gap-5">
          <AppSelectField<MemberRegisterFormValues>
            name="educationLevel"
            label="Highest Level of Education"
            placeholder="Select..."
            widthClass="w-96"
            options={educationLevels}
          />
          <AppTextField<MemberRegisterFormValues>
            name="profession"
            label="Proffesion"
            placeholder="e.g. Bsc. with Education"
            className="w-96"
          />
        </div>
        <div className="flex gap-5">
          <AppTextField<MemberRegisterFormValues>
            name="title"
            label="Work Title"
            placeholder="e.g. Manager, HoD"
            className="w-96"
          />
          <AppTextField<MemberRegisterFormValues>
            name="institution"
            label="Institution"
            className="w-96"
          />
        </div>
      </div>
      <AppSubmitButton label="Submit" />
    </AppForm>
  );
}
