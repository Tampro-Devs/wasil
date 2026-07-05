import UsersServiceEndpoint from ".";
import apiService from "../../../api.service.config";
import type { ResponseResource } from "../../../utils/response.resource";
import type { UserFormValues } from "../schemas/user.form.schema";
import type { User } from "../types/user.type";

const UserServices = {
  async addUser(data: UserFormValues): Promise<ResponseResource<User | null>> {
    const response = await apiService.post<ResponseResource<User | null>>(
      UsersServiceEndpoint.user.add,
      data,
    );
    return response.data;
  },

  async getUsers(): Promise<ResponseResource<User[]>> {
    const response = await apiService.get<ResponseResource<User[]>>(
      UsersServiceEndpoint.user.get,
    );
    return response.data;
  },

  async updateUser(
    data: UserFormValues,
  ): Promise<ResponseResource<User | null>> {
    const response = await apiService.put<ResponseResource<User | null>>(
      UsersServiceEndpoint.user.update,
      data,
    );
    return response.data;
  },

  async removeUser(userId: string): Promise<ResponseResource<null>> {
    const response = await apiService.delete<ResponseResource<null>>(
      UsersServiceEndpoint.user.delete,
      { data: { user_id: userId } },
    );
    return response.data;
  },
};

export default UserServices;
