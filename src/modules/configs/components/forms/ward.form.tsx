import AppModal from "../../../../shared/components/app.modal";
import { AppSubmitButton } from "../../../../shared/components/app.button";

import type { FormModalProps } from "../../../../shared/types/form";
import { districts, regions } from "../../data";
import { useForm } from "react-hook-form";
import {
  defaultWardValues,
  wardSchema,
  type WardFormValues,
} from "../../schemas/ward.form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppSelectField } from "../../../../shared/components/form/fields/app.select.field";
import { AppTextField } from "../../../../shared/components/form/fields/app.text.field";
import { AppFormProvider } from "../../../../shared/components/form";

interface WardFormProps extends FormModalProps {}

export function WardForm({ isOpen, setIsOpen }: WardFormProps) {
  const form = useForm<WardFormValues>({
    resolver: zodResolver(wardSchema),
    defaultValues: defaultWardValues,
  });

  async function onSubmit(data: WardFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
    setIsOpen(false);
  }
  return (
    <AppModal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Ward">
      <AppFormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-2 flex flex-col gap-5"
        >
          <AppSelectField
            control={form.control}
            label="Region"
            name="region"
            placeholder="Select..."
            options={regions}
          />
          <AppSelectField
            control={form.control}
            label="District"
            name="district"
            placeholder="Select..."
            options={districts}
          />
          <AppTextField
            control={form.control}
            label="Ward Name"
            name="name"
            placeholder="Ward Name"
          />
          <div className="flex justify-end">
            <AppSubmitButton label="Add" />
          </div>
        </form>
      </AppFormProvider>
    </AppModal>
  );
}
