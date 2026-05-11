import AppModal from "../../../../shared/components/app.modal";
import Button from "../../../../shared/components/button";
import { FormField } from "../../../../shared/components/form.field";
import type { FormModalProps } from "../../../../shared/types/form";

interface RegionFormProps extends FormModalProps {}

export function RegionForm({ isOpen, setIsOpen }: RegionFormProps) {
  return (
    <AppModal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Region">
      <form className="mt-2 flex flex-col gap-5">
        <FormField name="" placeholder="Region Name" />
        <div className="flex justify-end">
          <Button type="submit" size="sm" className="w-fit px-10">
            Add
          </Button>
        </div>
      </form>
    </AppModal>
  );
}
