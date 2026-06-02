import AppModal from "../../../../shared/components/app.modal";
import { AppSubmitButton } from "../../../../shared/components/app.button";
import {
  AppSelectField,
  AppTextField,
} from "../../../../shared/components/app.form.fields";
import type { FormModalProps } from "../../../../shared/types/form";
import { regions } from "../../data";
import type { SubmitHandler } from "react-hook-form";
import {
  defaultDistrictValues,
  districtSchema,
  type DistrictFormValues,
} from "../../schemas/district.form.schema";
import { AppForm } from "../../../../shared/components/app.form";

interface DistrictFormProps extends FormModalProps {}

export function DistrictForm({ isOpen, setIsOpen }: DistrictFormProps) {
  const onSubmit: SubmitHandler<DistrictFormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
    setIsOpen(false);
  };
  return (
    <AppModal isOpen={isOpen} setIsOpen={setIsOpen} title="Add District">
      <AppForm<DistrictFormValues>
        schema={districtSchema}
        defaultValues={defaultDistrictValues}
        onSubmit={onSubmit}
        className="w-full mt-2 flex flex-col gap-5"
      >
        <AppSelectField<DistrictFormValues>
          label="Region"
          name="region"
          placeholder="Select..."
          options={regions}
        />
        <AppTextField<DistrictFormValues>
          label="District Name"
          name="name"
          placeholder="District Name"
        />
        <div className="flex justify-end">
          <AppSubmitButton label="Add" />
        </div>
      </AppForm>
    </AppModal>
  );
}
