import UsersServiceEndpoint from ".";
import apiService from "../../../api.service.config";
import type { ResponseResource } from "../../../utils/response.resource";
import type { RolePermissionsValue } from "../types/permission.type";
import type { Role } from "../types/role.type";

const PermissionServices = {
  async getRolePermissions(roleId: string): Promise<ResponseResource<Role>> {
    const response = await apiService.get<ResponseResource<Role>>(
      UsersServiceEndpoint.permission.get,
      { params: { role_id: roleId } },
    );
    return response.data;
  },

  async setRolePermissions(
    data: RolePermissionsValue,
  ): Promise<ResponseResource<Role | null>> {
    const response = await apiService.put<ResponseResource<Role | null>>(
      UsersServiceEndpoint.permission.set,
      data,
    );
    return response.data;
  },
};

export default PermissionServices;
