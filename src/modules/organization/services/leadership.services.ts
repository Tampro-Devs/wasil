import OrganizationServiceEndpoint from ".";
import apiService from "../../../api.service.config";
import type { ResponseResource } from "../../../utils/response.resource";
import type { Leadership } from "../types/leadership.type";

export const LeadershipServices = {
  //   async addLeadership(
  //     data: LeadershipFormValues,
  //   ): Promise<ResponseResource<Leadership | null>> {
  //     const response = await apiService.post<ResponseResource<Leadership | null>>(
  //       OrganizationServiceEndpoint.leader.add,
  //       data,
  //     );
  //     return response.data;
  //   },

  async getLeaderships(
    category?: number,
  ): Promise<ResponseResource<Leadership[]>> {
    const response = await apiService.get<ResponseResource<Leadership[]>>(
      OrganizationServiceEndpoint.leadership.get,
      { params: { category: category } },
    );
    return response.data;
  },
};
