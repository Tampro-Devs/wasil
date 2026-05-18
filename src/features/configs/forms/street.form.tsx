import AppModal from "../../../shared/components/app.modal";
import { AppSubmitButton } from "../../../shared/components/app.button";
import {
  AppSelectField,
  AppTextField,
} from "../../../shared/components/app.form.fields";
import type { FormModalProps } from "../../../shared/types/form";
import { regions, districts, wards } from "../data";
import { AppForm } from "../../../shared/components/app.form";
import {
  defaultStreetValues,
  streetSchema,
  type StreetFormValues,
} from "../schemas/street.form.schema";
import type { SubmitHandler } from "react-hook-form";

interface StreetFormProps extends FormModalProps {}

export function StreetForm({ isOpen, setIsOpen }: StreetFormProps) {
  const onSubmit: SubmitHandler<StreetFormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
    setIsOpen(false);
  };
  return (
    <AppModal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Street">
      <AppForm<StreetFormValues>
        schema={streetSchema}
        defaultValues={defaultStreetValues}
        onSubmit={onSubmit}
        className="mt-2 flex flex-col gap-5"
      >
        <AppSelectField<StreetFormValues>
          name="region"
          label="Region"
          placeholder="Select..."
          options={regions}
        />
        <AppSelectField<StreetFormValues>
          name="district"
          label="District"
          placeholder="Select..."
          options={districts}
        />
        <AppSelectField<StreetFormValues>
          name="ward"
          label="Ward"
          placeholder="Select..."
          options={wards}
        />
        <AppTextField<StreetFormValues>
          label="Name"
          name="name"
          placeholder="Street Name"
        />
        <div className="flex justify-end">
          <AppSubmitButton label="Add" />
        </div>
      </AppForm>
    </AppModal>
  );
}
