import { LuPen, LuPlus, LuTrash } from "react-icons/lu";

import { AppIconButton } from "../../../shared/components/app.button";
import {
  AppContentContainer,
  AppContentBody,
  AppContentHeader,
} from "../../../shared/components/app.content.container";
import { setPageHeader } from "../../../utils/general_hooks";
import {
  LoadingTableBody,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "../../../shared/components/table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiQueryKeys } from "../../../api.service.config/query.config/query.keys";
import EducationLevelServices from "../services/education.level.services";
import DeleteAssuaranceDialog from "../../../shared/components/delete.assuarance.dialog";
import { useState } from "react";
import type { EducationLevel } from "../types/education.type";
import { triggerToast } from "../../../utils/globals";
import EducationLevelForm from "../components/forms/education.level.form";

export default function EducationConfigPage() {
  const queryClient = useQueryClient();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel | null>(
    null,
  );

  const { data: apiResponse, isLoading } = useQuery({
    queryKey: apiQueryKeys.educationLevels,
    queryFn: EducationLevelServices.getEducationLevels,
  });

  const { mutateAsync: deleteLevelMutation, isPending: isRemoving } =
    useMutation({
      mutationKey: apiQueryKeys.educationLevels,
      mutationFn: EducationLevelServices.removeEducationLevel,
      onSuccess: (response) => {
        const responseCode = response.responseCode;
        const message = response.message;
        if (responseCode == 0) {
          triggerToast(message ?? "Success", "success");
          setShowDeleteDialog(false);
        } else {
          triggerToast(message ?? "Unknown error occured", "error");
        }
      },
      onError: (error) => {
        triggerToast(error.message, "error");
      },
    });

  setPageHeader("Education");
  return (
    <>
      <AppContentContainer>
        <AppContentHeader
          title="Manage Education Levels"
          actions={
            <AppIconButton Icon={LuPlus} onClick={() => setIsFormOpen(true)} />
          }
        />
        <AppContentBody>
          <TableWrapper
            error={
              apiResponse?.message && (apiResponse.data?.length ?? 0) === 0
                ? {
                    title: "No Education Levels",
                    message: apiResponse.message,
                  }
                : undefined
            }
          >
            <TableCaption>
              <span className="font-bold me-1">Total:</span>
              <span className="text-xs">3</span>
            </TableCaption>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>S/N</TableHead>
                  <TableHead>Levels</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Proffessionalism</TableHead>
                  <TableHead>Members</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <LoadingTableBody columns={6} />
                ) : (
                  apiResponse?.data?.map((level, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{level.name}</TableCell>
                      <TableCell>
                        <span
                          className={`w-20 px-2 rounded-full ${level.category == "Sharia" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"}`}
                        >
                          {level.category}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`w-20 px-2 rounded-full font-bold ${level.proffessionalism === "Professional" ? " text-cyan-500" : "text-mauve-500"}`}
                        >
                          {level.proffessionalism}
                        </span>
                      </TableCell>
                      <TableCell>{level.members}</TableCell>
                      <TableCell>
                        <div className="flex gap-3">
                          <LuPen
                            size={20}
                            className="text-green-400 cursor-pointer"
                            onClick={() => {
                              setSelectedLevel(level);
                              setIsFormOpen(true);
                            }}
                          />
                          <LuTrash
                            size={20}
                            className="text-red-400 cursor-pointer"
                            onClick={() => {
                              setSelectedLevel(level);
                              setShowDeleteDialog(true);
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableWrapper>
        </AppContentBody>
      </AppContentContainer>
      <EducationLevelForm
        educationLevel={selectedLevel}
        isOpen={isFormOpen}
        setIsOpen={(value) => {
          setIsFormOpen(value);
          if (!value) {
            setSelectedLevel(null);
          }
        }}
      />
      {selectedLevel && (
        <DeleteAssuaranceDialog
          itemName={selectedLevel?.name}
          isOpen={showDeleteDialog}
          isRemoving={isRemoving}
          setIsOpen={setShowDeleteDialog}
          onRemoving={async () => {
            await deleteLevelMutation(selectedLevel.level_id);
            await queryClient.invalidateQueries({
              queryKey: apiQueryKeys.educationLevels,
            });
          }}
        />
      )}
    </>
  );
}
