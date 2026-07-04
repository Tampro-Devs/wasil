import AppModal from "../../../../shared/components/app.modal";
import type { FormModalProps } from "../../../../shared/types/form";

import {
  defaultRegionValues,
  regionSchema,
  type RegionFormValues,
} from "../../schemas/region.form.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppSubmitButton } from "../../../../shared/components/app.button";
import { AppFormProvider } from "../../../../shared/components/form";
import { AppTextField } from "../../../../shared/components/form/fields/app.text.field";

interface RegionFormProps extends FormModalProps {}

export function RegionForm({ isOpen, setIsOpen }: RegionFormProps) {
  const form = useForm<RegionFormValues>({
    resolver: zodResolver(regionSchema),
    defaultValues: defaultRegionValues,
  });

  async function onSubmit(data: RegionFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("FORM DATA::", data);
    setIsOpen(false);
  }
  return (
    <AppModal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Region">
      <AppFormProvider {...form}>
        <form
          className="mt-2 flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <AppTextField control={form.control} name="name" label="Name" />
          <div className="flex justify-end">
            <AppSubmitButton label="Add" size="sm" className="w-fit px-10" />
          </div>
        </form>
      </AppFormProvider>
    </AppModal>
  );
}
