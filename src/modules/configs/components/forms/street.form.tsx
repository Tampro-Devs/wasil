import AppModal from "../../../../shared/components/app.modal";
import { AppSubmitButton } from "../../../../shared/components/app.button";

import type { FormModalProps } from "../../../../shared/types/form";
import { regions, districts, wards } from "../../data";
import {
  defaultStreetValues,
  streetSchema,
  type StreetFormValues,
} from "../../schemas/street.form.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppFormProvider } from "../../../../shared/components/form";
import { AppSelectField } from "../../../../shared/components/form/fields/app.select.field";
import { AppTextField } from "../../../../shared/components/form/fields/app.text.field";

interface StreetFormProps extends FormModalProps {}

export function StreetForm({ isOpen, setIsOpen }: StreetFormProps) {
  const form = useForm<StreetFormValues>({
    resolver: zodResolver(streetSchema),
    defaultValues: defaultStreetValues,
  });

  async function onSubmit(data: StreetFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
    setIsOpen(false);
  }
  return (
    <AppModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Add Street"
      className="w-sm"
    >
      <AppFormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mt-2 flex flex-col gap-5"
        >
          <AppSelectField
            control={form.control}
            name="region"
            label="Region"
            placeholder="Select..."
            options={regions}
          />
          <AppSelectField
            control={form.control}
            name="district"
            label="District"
            placeholder="Select..."
            options={districts}
          />
          <AppSelectField
            control={form.control}
            name="ward"
            label="Ward"
            placeholder="Select..."
            options={wards}
          />
          <AppTextField
            control={form.control}
            label="Name"
            name="name"
            placeholder="Street Name"
          />
          <div className="flex justify-end">
            <AppSubmitButton label="Add" />
          </div>
        </form>
      </AppFormProvider>
    </AppModal>
  );
}
