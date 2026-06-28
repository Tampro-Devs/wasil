import AppModal from "../../../../shared/components/app.modal";
import { AppTextField } from "../../../../shared/components/app.form.fields";
import type { FormModalProps } from "../../../../shared/types/form";
import { AppForm } from "../../../../shared/components/app.form";
import {
  defaultRegionValues,
  regionSchema,
  type RegionFormValues,
} from "../../schemas/region.form.schema";
import type { SubmitHandler } from "react-hook-form";
import { AppSubmitButton } from "../../../../shared/components/app.button";

interface RegionFormProps extends FormModalProps {}

export function RegionForm({ isOpen, setIsOpen }: RegionFormProps) {
  const onSubmit: SubmitHandler<RegionFormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
    setIsOpen(false);
  };
  return (
    <AppModal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Region">
      <AppForm<RegionFormValues>
        schema={regionSchema}
        onSubmit={onSubmit}
        defaultValues={defaultRegionValues}
        className="mt-2 flex flex-col gap-5"
      >
        <AppTextField<RegionFormValues> name="name" label="Name" />
        <div className="flex justify-end">
          <AppSubmitButton label="Add" size="sm" className="w-fit px-10" />
        </div>
      </AppForm>
    </AppModal>
  );
}
