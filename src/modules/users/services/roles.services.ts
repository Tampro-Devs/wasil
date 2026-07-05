import UsersServiceEndpoint from ".";
import apiService from "../../../api.service.config";
import type { ResponseResource } from "../../../utils/response.resource";
import type { RoleFormValues } from "../schemas/role.form.schema";
import type { Role } from "../types/role.type";

const RoleServices = {
  async addRole(data: RoleFormValues): Promise<ResponseResource<Role | null>> {
    const response = await apiService.post<ResponseResource<Role | null>>(
      UsersServiceEndpoint.role.add,
      data,
    );
    return response.data;
  },

  async getRoles(): Promise<ResponseResource<Role[]>> {
    const response = await apiService.get<ResponseResource<Role[]>>(
      UsersServiceEndpoint.role.get,
      //   { params: { name: name } },
    );
    return response.data;
  },

  async updateRole(
    data: RoleFormValues,
  ): Promise<ResponseResource<Role | null>> {
    const response = await apiService.put<ResponseResource<Role | null>>(
      UsersServiceEndpoint.role.update,
      data,
    );
    return response.data;
  },

  async removeRole(roleId: string): Promise<ResponseResource<null>> {
    const response = await apiService.delete<ResponseResource<null>>(
      UsersServiceEndpoint.role.delete,
      { data: { role_id: roleId } },
    );
    return response.data;
  },
};

export default RoleServices;
