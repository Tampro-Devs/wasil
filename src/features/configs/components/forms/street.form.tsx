import AppModal from "../../../../shared/components/app.modal";
import AppSelectField from "../../../../shared/components/app.select.field";
import Button from "../../../../shared/components/button";
import { FormField } from "../../../../shared/components/form.field";
import type { FormModalProps } from "../../../../shared/types/form";
import { regions, districts, wards } from "../../data";

interface StreetFormProps extends FormModalProps {}

export function StreetForm({ isOpen, setIsOpen }: StreetFormProps) {
  return (
    <AppModal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Street">
      <form className="mt-2 flex flex-col gap-5">
        <AppSelectField name="" placeholder="Select Region" options={regions} />
        <AppSelectField
          name=""
          placeholder="Select District"
          options={districts}
        />
        <AppSelectField name="" placeholder="Select Ward" options={wards} />
        <FormField name="" placeholder="Street Name" />
        <div className="flex justify-end">
          <Button type="submit" size="sm" className="w-fit px-10">
            Add
          </Button>
        </div>
      </form>
    </AppModal>
  );
}
