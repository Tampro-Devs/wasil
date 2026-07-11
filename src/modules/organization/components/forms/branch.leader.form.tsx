import { useCallback, useEffect, useState } from "react";
import type { FormModalProps } from "../../../../shared/types/form";
import {
  LEADERSHIP_CATEGORY,
  leadershipTypes,
  type Leader,
} from "../../types/leadership.type";
import {
  branchLeaderSchema,
  defaultBranchLeaderValues,
  type BranchLeaderFormValues,
} from "../../schemas/leader.form.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LeaderServices } from "../../services/leader.services";
import { triggerToast } from "../../../../utils/globals";
import { apiQueryKeys } from "../../../../api.service.config/query.config/query.keys";
import { AppSubmitButton } from "../../../../shared/components/app.button";
import AppModal from "../../../../shared/components/app.modal";
import { AppFormProvider } from "../../../../shared/components/form";
import {
  AppSelectField,
  type SelectOption,
} from "../../../../shared/components/form/fields/app.select.field";
import MemberSelectInput from "../../../../shared/components/form/inputs/leader.select.input";
import LeadershipSelectInput from "../../../../shared/components/form/inputs/leadership.select.input";
import BranchSelectInput from "../../../../shared/components/form/inputs/branch.select.input";

interface BranchLeaderFormProps extends FormModalProps {
  leader?: Leader;
}
export default function BranchLeaderForm({
  isOpen,
  setIsOpen,
  leader,
}: BranchLeaderFormProps) {
  const queryClient = useQueryClient();

  const [selectedBranch, setSelectedBranch] = useState<SelectOption | null>(
    null,
  );

  const form = useForm<BranchLeaderFormValues>({
    resolver: zodResolver(branchLeaderSchema),
    defaultValues: defaultBranchLeaderValues,
  });

  const getDefaultValues = useCallback((): BranchLeaderFormValues => {
    if (leader) {
      return {
        leadership: leader?.leadership.leadership_id,
        branch: leader.member.branch?.branch_id ?? "",
        type: leader?.type.toString(),
        member: leader?.member.member_id,
      };
    }
    return defaultBranchLeaderValues;
  }, [leader]);

  const leaderMutation = useMutation({
    mutationFn: leader ? LeaderServices.updateLeader : LeaderServices.addLeader,
    onSuccess: (response) => {
      const responseCode = response.responseCode;
      const message = response.message;
      if (responseCode === 0) {
        triggerToast(message ?? "Success", "success");
        closeModal(false);
      } else {
        triggerToast(message ?? "Unknown error ocurred", "error");
      }
    },
    onError: (error) => {
      triggerToast(error.message, "error");
    },
  });

  async function onSubmit(data: BranchLeaderFormValues) {
    await leaderMutation.mutateAsync(data);
    await queryClient.invalidateQueries({
      queryKey: apiQueryKeys.leaders,
    });
  }

  function closeModal(value: boolean) {
    form.reset();
    setIsOpen(value);
  }

  useEffect(() => {
    if (isOpen) {
      form.reset(getDefaultValues());
    }
  }, [isOpen]);

  return (
    <AppModal
      isOpen={isOpen}
      setIsOpen={closeModal}
      title="Add Branch Leader"
      className="w-sm"
    >
      <AppFormProvider {...form}>
        <form
          className="mt-2 flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <LeadershipSelectInput
            category={LEADERSHIP_CATEGORY.BRANCH}
            control={form.control}
            name="leadership"
            label="Leadership"
            placeholder="Select..."
            widthClass="w-full"
          />
          <BranchSelectInput
            control={form.control}
            name="branch"
            label="Branch"
            placeholder="Select..."
            widthClass="w-full"
            onChange={(option) => {
              setSelectedBranch(option);
            }}
          />
          <AppSelectField
            control={form.control}
            name="type"
            label="Leadership Type"
            placeholder="Select..."
            widthClass="w-full"
            options={leadershipTypes}
          />
          {selectedBranch && (
            <MemberSelectInput
              control={form.control}
              name="member"
              label="Leader"
              placeholder="Select..."
              widthClass="w-full"
              filters={{
                branch: selectedBranch.value,
                name: "",
                district: "",
                ward: "",
                street: "",
              }}
            />
          )}
          <div className="flex justify-end">
            <AppSubmitButton
              label="Add"
              size="sm"
              className="w-fit px-10"
              loading={leaderMutation.isPending}
            />
          </div>
        </form>
      </AppFormProvider>
    </AppModal>
  );
}
