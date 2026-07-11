import OrganizationServiceEndpoint from ".";
import apiService from "../../../api.service.config";
import type { ResponseResource } from "../../../utils/response.resource";
import type { LeaderFormValues } from "../schemas/leader.form.schema";
import type { Leader } from "../types/leadership.type";

export const LeaderServices = {
  async addLeader(
    data: LeaderFormValues,
  ): Promise<ResponseResource<Leader | null>> {
    const response = await apiService.post<ResponseResource<Leader | null>>(
      OrganizationServiceEndpoint.leader.add,
      data,
    );
    return response.data;
  },

  async getLeaders(
    purpose: "form" | "list",
    category?: number,
  ): Promise<ResponseResource<Leader[]>> {
    const response = await apiService.get<ResponseResource<Leader[]>>(
      OrganizationServiceEndpoint.leader.get,
      { params: { purpose: purpose, category: category } },
    );
    return response.data;
  },

  async updateLeader(
    data: LeaderFormValues,
  ): Promise<ResponseResource<Leader | null>> {
    const response = await apiService.put<ResponseResource<Leader | null>>(
      OrganizationServiceEndpoint.leader.update,
      data,
    );
    return response.data;
  },
};
