import {
  AppContentContainer,
  AppContentBody,
  AppContentHeader,
} from "../../../shared/components/app.content.container";
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
import { setPageHeader } from "../../../utils/general_hooks";
import { AppIconButton } from "../../../shared/components/app.button";
import { LuEye, LuPen, LuPlus, LuTrash } from "react-icons/lu";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiQueryKeys } from "../../../api.service.config/query.config/query.keys";
import RoleServices from "../services/roles.services";
import { triggerToast } from "../../../utils/globals";
import type { Role } from "../types/role.type";
import DeleteAssuaranceDialog from "../../../shared/components/delete.assuarance.dialog";
import { RoleForm } from "../components/forms/role.form";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../router/route.paths";

export default function RolesManagementPage() {
  setPageHeader("System Roles");

  const queryClient = useQueryClient();
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isOpenRoleForm, setIsOpenRoleForm] = useState(false);

  const { data: apiResponse, isLoading } = useQuery({
    queryKey: apiQueryKeys.roles,
    queryFn: RoleServices.getRoles,
  });

  const { mutateAsync: deleteRoleMutation, isPending: isRemoving } =
    useMutation({
      mutationKey: apiQueryKeys.roles,
      mutationFn: RoleServices.removeRole,
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

  return (
    <>
      <AppContentContainer>
        <AppContentHeader
          title="Manage Roles"
          actions={
            <AppIconButton
              Icon={LuPlus}
              onClick={() => setIsOpenRoleForm(true)}
            />
          }
        />
        <AppContentBody>
          <TableWrapper
            error={
              apiResponse?.message && (apiResponse.data?.length ?? 0) === 0
                ? {
                    title: "No Roles",
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
                  <TableHead>Name</TableHead>
                  <TableHead>Users</TableHead>
                  <TableHead>Permissions</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <LoadingTableBody columns={4} />
                ) : (
                  apiResponse?.data.map((role, index) => (
                    <TableRow key={index}>
                      <TableCell>{role.name}</TableCell>
                      <TableCell>{role.total_users}</TableCell>
                      <TableCell>{role.total_permissions}</TableCell>
                      <TableCell>
                        <div className="flex gap-3">
                          <Link
                            to={ROUTE_PATHS.users.roles.preview(role.role_id)}
                          >
                            <LuEye
                              size={20}
                              className="text-slate-400 cursor-pointer"
                            />
                          </Link>
                          <LuPen
                            size={20}
                            className="text-green-400 cursor-pointer"
                            onClick={() => {
                              setSelectedRole(role);
                              setIsOpenRoleForm(true);
                            }}
                          />
                          <LuTrash
                            size={20}
                            className="text-red-400 cursor-pointer"
                            onClick={() => {
                              setSelectedRole(role);
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
      <RoleForm
        isOpen={isOpenRoleForm}
        setIsOpen={setIsOpenRoleForm}
        role={selectedRole}
      />
      {selectedRole && (
        <DeleteAssuaranceDialog
          itemName={selectedRole?.name}
          isOpen={showDeleteDialog}
          isRemoving={isRemoving}
          setIsOpen={setShowDeleteDialog}
          onRemoving={async () => {
            await deleteRoleMutation(selectedRole.role_id);
            await queryClient.invalidateQueries({
              queryKey: apiQueryKeys.roles,
            });
          }}
        />
      )}
    </>
  );
}
