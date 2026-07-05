import AppModal from "../../../../shared/components/app.modal";
import type { FormModalProps } from "../../../../shared/types/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppSubmitButton } from "../../../../shared/components/app.button";
import { AppFormProvider } from "../../../../shared/components/form";
import { AppTextField } from "../../../../shared/components/form/fields/app.text.field";
import {
  defaultRoleValues,
  roleSchema,
  type RoleFormValues,
} from "../../schemas/role.form.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import type { Role } from "../../types/role.type";
import RoleServices from "../../services/roles.services";
import { triggerToast } from "../../../../utils/globals";
import { apiQueryKeys } from "../../../../api.service.config/query.config/query.keys";

interface RoleFormProps extends FormModalProps {
  role: Role | null;
}

export function RoleForm({ isOpen, setIsOpen, role }: RoleFormProps) {
  const queryClient = useQueryClient();

  const getDefaultValues = useCallback((): RoleFormValues => {
    if (role) {
      return {
        role_id: role?.role_id,
        name: role?.name,
      };
    }
    return defaultRoleValues;
  }, [role]);

  useEffect(() => {
    if (isOpen) {
      form.reset(getDefaultValues());
    }
  }, [isOpen]);

  const form = useForm<RoleFormValues>({
    resolver: zodResolver(roleSchema),
    defaultValues: getDefaultValues(),
  });

  const roleMutation = useMutation({
    mutationFn: role ? RoleServices.updateRole : RoleServices.addRole,
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

  async function onSubmit(data: RoleFormValues) {
    await roleMutation.mutateAsync(data);
    await queryClient.invalidateQueries({
      queryKey: apiQueryKeys.roles,
    });
  }

  return (
    <AppModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Add Role"
      className="w-sm"
    >
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
