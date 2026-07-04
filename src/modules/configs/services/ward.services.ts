import ConfigServiceEndpoint from ".";
import apiService from "../../../api.service.config";
import type { ResponseResource } from "../../../utils/response.resource";
import type { WardFormValues } from "../schemas/ward.form.schema";
import type { Ward } from "../types/ward.type";

const WardServices = {
  async addWard(data: WardFormValues): Promise<ResponseResource<Ward | null>> {
    const response = await apiService.post<ResponseResource<Ward | null>>(
      ConfigServiceEndpoint.ward.add,
      data,
    );
    return response.data;
  },

  async getWards({
    districtId,
    name,
  }: {
    districtId: string;
    name?: string;
  }): Promise<ResponseResource<Ward[]>> {
    const response = await apiService.get<ResponseResource<Ward[]>>(
      ConfigServiceEndpoint.ward.get,
      { params: { name: name, district_id: districtId } },
    );
    return response.data;
  },

  async updateWard(
    data: WardFormValues,
  ): Promise<ResponseResource<Ward | null>> {
    const response = await apiService.put<ResponseResource<Ward | null>>(
      ConfigServiceEndpoint.ward.update,
      data,
    );
    return response.data;
  },

  async removeWard(wardId: string): Promise<ResponseResource<null>> {
    const response = await apiService.delete<ResponseResource<null>>(
      ConfigServiceEndpoint.ward.delete,
      { data: { ward_id: wardId } },
    );
    return response.data;
  },
};

export default WardServices;
