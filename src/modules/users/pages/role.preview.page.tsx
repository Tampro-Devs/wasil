import { useParams } from "react-router-dom";
import { setPageHeader } from "../../../utils/general_hooks";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import PermissionServices from "../services/permissions.services";
import {
  AppContentBody,
  AppContentContainer,
} from "../../../shared/components/app.content.container";
import RoleDataLoadingSkeleton from "../components/role.data.loading.skeleton";
import type { Role } from "../types/role.type";
import NotFound from "../../../shared/components/not-found";
import { AppCheckboxField } from "../../../shared/components/form/fields/app.checkbox.field";
import AppButton from "../../../shared/components/app.button";
import { triggerToast } from "../../../utils/globals";
import type { RolePermissionsValue } from "../types/permission.type";

export default function RolePreviewPage() {
  const { roleId } = useParams();

  const [roleData, setRoleData] = useState<Role | null>(null);
  const [responseMsg, setResponseMsg] = useState<string | null>(null);
  const [permissions, setPermissions] = useState<number[]>([]);

  setPageHeader("Preview Role", "Back To Roles");

  const permissionsMutation = useMutation({
    mutationFn: PermissionServices.getRolePermissions,
    onSuccess: (response) => {
      const responseCode = response.responseCode;
      const message = response.message;
      if (responseCode == 0) {
        const groups = response.data.permission_groups;

        const permIds: number[] = groups.flatMap((group) =>
          group.permissions
            .filter((perm) => perm.is_belong_to_role)
            .map((perm) => perm.id),
        );

        setPermissions(permIds);
        setRoleData(response.data);
      } else {
        setResponseMsg(message);
      }
    },
  });

  useEffect(() => {
    if (!roleId) return;
    void (async () => {
      await permissionsMutation.mutateAsync(roleId);
    })();
  }, [roleId]);

  const updatePermissions = (id: number, is_belong_to_role: boolean) => {
    if (is_belong_to_role) {
      setPermissions([...permissions, id]);
    } else {
      const updatedPermissions = permissions.filter((perm) => perm !== id);
      setPermissions(updatedPermissions);
    }
  };

  const rolePermissionMutation = useMutation({
    mutationFn: PermissionServices.setRolePermissions,
    onSuccess: (response) => {
      const responseCode = response.responseCode;
      const message = response.message;
      if (responseCode === 0) {
        triggerToast(message ?? "Success", "success");
      } else {
        triggerToast(message ?? "Unknown error ocurred", "error");
      }
    },
    onError: (error) => {
      triggerToast(error.message, "error");
    },
  });

  async function submitRolePermissions() {
    if (!roleId || permissions.length <= 0) return;

    const rolePermissionData: RolePermissionsValue = {
      role_id: roleId,
      permissions: permissions,
    };
    await rolePermissionMutation.mutateAsync(rolePermissionData);
  }
  return (
    <AppContentContainer>
      <AppContentBody>
        {permissionsMutation.isPending ? (
          <RoleDataLoadingSkeleton />
        ) : (
          <div className="flex flex-col gap-3">
            <div className="w-full border-t border-t-slate-300 border-b border-b-slate-300 px-3">
              <div className="flex gap-1 text-slate-500 py-1">
                <span>Role</span>
                <span>:</span>
                <span className="font-bold">{roleData?.name}</span>
              </div>
            </div>

            {responseMsg ? (
              <NotFound
                isContent={true}
                title="Permissions Error"
                message={responseMsg}
              />
            ) : (
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {roleData?.permission_groups.map((group, index) => (
                    <div
                      key={index}
                      className="bg-slate-300/30 min-h-40 rounded-md p-2"
                    >
                      <div className="flex gap-1 items-end pb-1 border-b border-b-slate-300 mb-3">
                        <span className="text-sm font-bold">{group.title}</span>
                        <span className="text-xs text-slate-400">
                          Permission
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {group.permissions.map((permission, index) => (
                          <div key={index} className="flex">
                            <AppCheckboxField
                              checked={permission.is_belong_to_role}
                              label={permission.name}
                              onChange={(checked) => {
                                updatePermissions(permission.id, checked);
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <AppButton
                    className="min-w-32 h-7 p-0"
                    onClick={(e) => {
                      e.preventDefault();
                      submitRolePermissions();
                    }}
                  >
                    Update
                  </AppButton>
                </div>
              </div>
            )}
          </div>
        )}
      </AppContentBody>
    </AppContentContainer>
  );
}
