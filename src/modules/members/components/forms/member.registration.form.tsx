import {
  defaultMemberRegisterFormValues,
  memberRegisterFormSchema,
  type MemberRegisterFormValues,
} from "../../schema/member.register.for.schema";
import { useForm } from "react-hook-form";
import { genders } from "../../types/gender.type";
import { AppSubmitButton } from "../../../../shared/components/app.button";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppFormProvider } from "../../../../shared/components/form";
import { AppTextField } from "../../../../shared/components/form/fields/app.text.field";
import {
  AppSelectField,
  type SelectOption,
} from "../../../../shared/components/form/fields/app.select.field";
import { AppDatePicker } from "../../../../shared/components/form/fields/date.picker/app.date.picker";
import { AppCheckboxFormField } from "../../../../shared/components/form/fields/app.checkbox.field";
import DistrictSelectInput from "../../../../shared/components/form/inputs/district.select.input";
import WardSelectInput from "../../../../shared/components/form/inputs/ward.select.input";
import { useState } from "react";
import BranchSelectInput from "../../../../shared/components/form/inputs/branch.select.input";
import StreetSelectInput from "../../../../shared/components/form/inputs/street.select.input";
import EducationLevelSelectInput from "../../../../shared/components/form/inputs/education.level.input";
import { useMutation } from "@tanstack/react-query";
import type { Member } from "../../types/member.type";
import MemberServices from "../../services/member.services";
import { triggerToast } from "../../../../utils/globals";

export default function MemberRegistrationForm({
  member,
}: {
  member?: Member | null;
}) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<SelectOption | null>(
    null,
  );
  const [selectedWard, setSelectedWard] = useState<SelectOption | null>(null);
  const form = useForm<MemberRegisterFormValues>({
    resolver: zodResolver(memberRegisterFormSchema),
    defaultValues: defaultMemberRegisterFormValues,
  });

  const memberMutation = useMutation({
    mutationFn: member
      ? MemberServices.updateMember
      : MemberServices.registerMember,
    onSuccess: (response) => {
      const responseCode = response.responseCode;
      const message = response.message;
      if (responseCode === 0) {
        triggerToast(message ?? "Success", "success");
        form.reset();
      } else {
        triggerToast(message ?? "Unknown error ocurred", "error");
      }
    },
    onError: (error) => {
      triggerToast(error.message, "error");
    },
  });

  async function onSubmit(data: MemberRegisterFormValues) {
    await memberMutation.mutateAsync(data);
  }
  return (
    <AppFormProvider {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-3 mb-3">
          <div className="flex items-center gap-1 mb-2">
            <span className="font-bold text-sm">Primary Details</span>
            <div className="flex-1 border-b-2 border-b-slate-300"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-3">
            <AppTextField
              control={form.control}
              name="first_name"
              label="First Name"
              className="w-full"
            />
            <AppTextField
              control={form.control}
              name="middle_name"
              label="Middle Name"
              className="w-full"
            />
            <AppTextField
              control={form.control}
              name="last_name"
              label="Last Name"
              className="w-full"
            />
          </div>
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
        <div className="flex flex-col gap-3 mb-3">
          <div className="flex items-center gap-1 mb-2">
            <span className="font-bold text-sm">Residence Details</span>
            <div className="flex-1 border-b-2 border-b-slate-300"></div>
          </div>

          <AppCheckboxFormField
            control={form.control}
            name="has_permanent_residence"
            label="This is the permanent residence"
          />
          <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-2">
            <div className="flex-1">
              <BranchSelectInput
                control={form.control}
                name="branch"
                label="Branch/Region"
                placeholder="Select..."
                widthClass="w-full"
                onChange={(option, region) => {
                  if (!option || !region) return null;
                  setSelectedRegion(region);
                }}
              />
            </div>
            <div className="flex-1">
              <DistrictSelectInput
                control={form.control}
                regionId={selectedRegion ?? ""}
                label="District"
                name="district"
                placeholder="Select..."
                widthClass="w-full"
                onChange={(option) => {
                  if (!option) return null;
                  setSelectedDistrict(option);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-2">
            <div className="flex-1">
              <WardSelectInput
                control={form.control}
                districtId={selectedDistrict?.value ?? ""}
                label="Ward"
                name="ward"
                placeholder="Select..."
                widthClass="w-full"
                onChange={(option) => {
                  if (!option) return null;
                  setSelectedWard(option);
                }}
              />
            </div>
            <div className="flex-1">
              <StreetSelectInput
                control={form.control}
                wardId={selectedWard?.value ?? ""}
                name="residence"
                label="Street"
                placeholder="Select..."
                widthClass="w-full"
              />
            </div>
          </div>
          <AppTextField
            control={form.control}
            name="house_no"
            label="House no."
            className="w-full sm:w-1/2"
          />
        </div>

        <div className="flex flex-col gap-3 mb-3">
          <div className="flex items-center gap-1 mb-2">
            <span className="font-bold text-sm">Professional Details</span>
            <div className="flex-1 border-b-2 border-b-slate-300"></div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <div className="flex-1">
              <EducationLevelSelectInput
                control={form.control}
                name="edu_level"
                label="Highest Level of Education"
                placeholder="Select..."
                widthClass="w-full"
              />
            </div>
            <div className="flex-1">
              <AppTextField
                control={form.control}
                name="proffession"
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
                name="work_title"
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
        <div className="flex justify-end">
          <AppSubmitButton label="Submit" loading={memberMutation.isPending} />
        </div>
      </form>
    </AppFormProvider>
  );
}
