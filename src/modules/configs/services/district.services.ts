import ConfigServiceEndpoint from ".";
import apiService from "../../../api.service.config";
import type { ResponseResource } from "../../../utils/response.resource";
import type { DistrictFormValues } from "../schemas/district.form.schema";
import type { District } from "../types/district.type";

const DistrictServices = {
  async addDistrict(
    data: DistrictFormValues,
  ): Promise<ResponseResource<District | null>> {
    const response = await apiService.post<ResponseResource<District | null>>(
      ConfigServiceEndpoint.district.add,
      data,
    );
    return response.data;
  },

  async getDistricts({
    regionId,
    name,
  }: {
    regionId: string;
    name?: string;
  }): Promise<ResponseResource<District[]>> {
    const response = await apiService.get<ResponseResource<District[]>>(
      ConfigServiceEndpoint.district.get,
      { params: { name: name, region_id: regionId } },
    );
    return response.data;
  },

  async updateDistrict(
    data: DistrictFormValues,
  ): Promise<ResponseResource<District | null>> {
    const response = await apiService.put<ResponseResource<District | null>>(
      ConfigServiceEndpoint.district.update,
      data,
    );
    return response.data;
  },

  async removeDistrict(districtId: string): Promise<ResponseResource<null>> {
    const response = await apiService.delete<ResponseResource<null>>(
      ConfigServiceEndpoint.district.delete,
      { data: { district_id: districtId } },
    );
    return response.data;
  },
};

export default DistrictServices;
