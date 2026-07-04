import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AppSubmitButton } from "../../../../shared/components/app.button";
import AppModal from "../../../../shared/components/app.modal";
import { AppFormProvider } from "../../../../shared/components/form";
import { AppSelectField } from "../../../../shared/components/form/fields/app.select.field";
import { AppTextField } from "../../../../shared/components/form/fields/app.text.field";
import {
  defaultEducationLevelValues,
  educationLevelSchema,
  type EducationLevelFormValues,
} from "../../schemas/education.level.schema";
import type { FormModalProps } from "../../../../shared/types/form";
import {
  educationalCategories,
  proffessionalisms,
  type EducationLevel,
} from "../../types/education.type";
import { triggerToast } from "../../../../utils/globals";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import EducationLevelServices from "../../services/education.level.services";
import { apiQueryKeys } from "../../../../api.service.config/query.config/query.keys";
import { useCallback, useEffect } from "react";
interface EducationalLevelFormProps extends FormModalProps {
  educationLevel: EducationLevel | null;
}
export default function EducationLevelForm({
  isOpen,
  educationLevel,
  setIsOpen,
}: EducationalLevelFormProps) {
  const queryClient = useQueryClient();

  const getDefaultValues = useCallback((): EducationLevelFormValues => {
    if (educationLevel) {
      return {
        level_id: educationLevel?.level_id,
        name: educationLevel?.name,
        category: educationLevel?.category,
        proffessionalism: educationLevel.proffessionalism,
      };
    }
    return defaultEducationLevelValues;
  }, [educationLevel]);

  useEffect(() => {
    if (isOpen) {
      form.reset(getDefaultValues());
    }
  }, [isOpen]);

  const form = useForm<EducationLevelFormValues>({
    resolver: zodResolver(educationLevelSchema),
    defaultValues: getDefaultValues(),
  });

  const educationLevelMutation = useMutation({
    mutationFn: educationLevel
      ? EducationLevelServices.updateEducationLevel
      : EducationLevelServices.addEducationLevel,
    onSuccess: (response) => {
      const responseCode = response.responseCode;
      const message = response.message;
      if (responseCode === 0) {
        triggerToast(message ?? "Success", "success");
        closeModal();
      } else {
        triggerToast(message ?? "Unknown error ocurred", "error");
      }
    },
    onError: (error) => {
      triggerToast(error.message, "error");
    },
  });

  function closeModal() {
    form.reset();
    setIsOpen(false);
  }

  async function onSubmit(data: EducationLevelFormValues) {
    await educationLevelMutation.mutateAsync(data);
    await queryClient.invalidateQueries({
      queryKey: apiQueryKeys.educationLevels,
    });
  }

  return (
    <AppModal
      isOpen={isOpen}
      setIsOpen={(_value) => closeModal()}
      title="Add District"
      className="w-sm"
    >
      <AppFormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-1"
        >
          <AppTextField
            control={form.control}
            label="Name"
            name="name"
            placeholder="Name"
          />
          <AppSelectField
            control={form.control}
            label="Category"
            name="category"
            placeholder="Select..."
            options={educationalCategories}
          />
          <AppSelectField
            control={form.control}
            label="Proffessionalism"
            name="proffessionalism"
            placeholder="Select..."
            options={proffessionalisms}
          />
          <div className="flex justify-end mt-2">
            <AppSubmitButton
              label={educationLevel ? "Update" : "Add"}
              loading={educationLevelMutation.isPending}
            />
          </div>
        </form>
      </AppFormProvider>
    </AppModal>
  );
}
