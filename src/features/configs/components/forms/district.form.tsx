import AppModal from "../../../../shared/components/app.modal";
import AppSelectField from "../../../../shared/components/app.select.field";
import Button from "../../../../shared/components/button";
import { FormField } from "../../../../shared/components/form.field";
import type { FormModalProps } from "../../../../shared/types/form";
import { regions } from "../../data";

interface DistrictFormProps extends FormModalProps {}

export function DistrictForm({ isOpen, setIsOpen }: DistrictFormProps) {
  return (
    <AppModal isOpen={isOpen} setIsOpen={setIsOpen} title="Add District">
      <form className="mt-2 flex flex-col gap-5">
        <AppSelectField name="" placeholder="Select Region" options={regions} />
        <FormField name="" placeholder="District Name" />
        <div className="flex justify-end">
          <Button type="submit" size="sm" className="w-fit px-10">
            Add
          </Button>
        </div>
      </form>
    </AppModal>
  );
}
