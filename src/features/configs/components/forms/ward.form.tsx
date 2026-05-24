import AppModal from "../../../../shared/components/app.modal";
import { AppSubmitButton } from "../../../../shared/components/app.button";
import {
  AppSelectField,
  AppTextField,
} from "../../../../shared/components/app.form.fields";
import type { FormModalProps } from "../../../../shared/types/form";
import { districts, regions } from "../../data";
import type { SubmitHandler } from "react-hook-form";
import {
  defaultWardValues,
  wardSchema,
  type WardFormValues,
} from "../../schemas/ward.form.schema";
import { AppForm } from "../../../../shared/components/app.form";

interface WardFormProps extends FormModalProps {}

export function WardForm({ isOpen, setIsOpen }: WardFormProps) {
  const onSubmit: SubmitHandler<WardFormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
    setIsOpen(false);
  };
  return (
    <AppModal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Ward">
      <AppForm<WardFormValues>
        schema={wardSchema}
        defaultValues={defaultWardValues}
        onSubmit={onSubmit}
        className="mt-2 flex flex-col gap-5"
      >
        <AppSelectField<WardFormValues>
          label="Region"
          name="region"
          placeholder="Select..."
          options={regions}
        />
        <AppSelectField<WardFormValues>
          label="District"
          name="district"
          placeholder="Select..."
          options={districts}
        />
        <AppTextField<WardFormValues>
          label="Ward Name"
          name="name"
          placeholder="Ward Name"
        />
        <div className="flex justify-end">
          <AppSubmitButton label="Add" />
        </div>
      </AppForm>
    </AppModal>
  );
}
