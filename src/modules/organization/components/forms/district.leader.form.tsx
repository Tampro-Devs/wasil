import { useCallback, useEffect, useState } from "react";
import type { FormModalProps } from "../../../../shared/types/form";
import {
  LEADERSHIP_CATEGORY,
  leadershipTypes,
  type Leader,
} from "../../types/leadership.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  defaultLeaderValues,
  leaderSchema,
  type LeaderFormValues,
} from "../../schemas/leader.form.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LeaderServices } from "../../services/leader.services";
import { triggerToast } from "../../../../utils/globals";
import { apiQueryKeys } from "../../../../api.service.config/query.config/query.keys";
import AppModal from "../../../../shared/components/app.modal";
import { AppFormProvider } from "../../../../shared/components/form";
import LeadershipSelectInput from "../../../../shared/components/form/inputs/leadership.select.input";
import { AppSubmitButton } from "../../../../shared/components/app.button";
import MemberSelectInput from "../../../../shared/components/form/inputs/leader.select.input";
import BranchSelectInput from "../../../../shared/components/form/inputs/branch.select.input";
import DistrictSelectInput from "../../../../shared/components/form/inputs/district.select.input";
import { AppSelectField } from "../../../../shared/components/form/fields/app.select.field";

interface DistrictLeaderFormProps extends FormModalProps {
  leader?: Leader;
}
export default function DistricLeaderForm({
  isOpen,
  setIsOpen,
  leader,
}: DistrictLeaderFormProps) {
  const queryClient = useQueryClient();

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const form = useForm<LeaderFormValues>({
    resolver: zodResolver(leaderSchema),
    defaultValues: defaultLeaderValues,
  });

  const getDefaultValues = useCallback((): LeaderFormValues => {
    if (leader) {
      return {
        leadership: leader?.leadership.leadership_id,
        type: leader?.type.toString(),
        member: leader?.member.member_id,
      };
    }
    return defaultLeaderValues;
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

  async function onSubmit(data: LeaderFormValues) {
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
      title="Add District Leader"
      className="w-sm"
    >
      <AppFormProvider {...form}>
        <form
          className="mt-2 flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <LeadershipSelectInput
            category={LEADERSHIP_CATEGORY.DISTRICT}
            control={form.control}
            name="leadership"
            label="Leadership"
            placeholder="Select..."
            widthClass="w-full"
          />
          <AppSelectField
            control={form.control}
            name="type"
            label="Leadership Type"
            placeholder="Select..."
            widthClass="w-full"
            options={leadershipTypes}
          />
          <BranchSelectInput
            control={form.control}
            name="branch"
            label="Branch/Region"
            placeholder="Select..."
            widthClass="w-full"
            onChange={(option, region) => {
              if (!option || !region) return null;
              setSelectedRegion(region);
            }}
          />
          <DistrictSelectInput
            control={form.control}
            regionId={selectedRegion ?? ""}
            label="District"
            name="district"
            placeholder="Select..."
            widthClass="w-full"
            onChange={(option) => {
              if (!option) return null;

              setSelectedDistrict(option.value);
            }}
          />
          {selectedDistrict && (
            <MemberSelectInput
              control={form.control}
              name="member"
              label="Leader"
              placeholder="Select..."
              widthClass="w-full"
              filters={{
                branch: "",
                name: "",
                district: selectedDistrict,
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
