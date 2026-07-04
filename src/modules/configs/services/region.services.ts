import ConfigServiceEndpoint from ".";
import apiService from "../../../api.service.config";
import type { ResponseResource } from "../../../utils/response.resource";
import type { RegionFormValues } from "../schemas/region.form.schema";
import type { Region } from "../types/region.type";

const RegionServices = {
  async addRegion(
    data: RegionFormValues,
  ): Promise<ResponseResource<Region | null>> {
    const response = await apiService.post<ResponseResource<Region | null>>(
      ConfigServiceEndpoint.region.add,
      data,
    );
    return response.data;
  },

  async getRegions(): Promise<ResponseResource<Region[]>> {
    const response = await apiService.get<ResponseResource<Region[]>>(
      ConfigServiceEndpoint.region.get,
      //   { params: { name: name } },
    );
    return response.data;
  },

  async updateRegion(
    data: RegionFormValues,
  ): Promise<ResponseResource<Region | null>> {
    const response = await apiService.put<ResponseResource<Region | null>>(
      ConfigServiceEndpoint.region.update,
      data,
    );
    return response.data;
  },

  async removeRegion(regionId: string): Promise<ResponseResource<null>> {
    const response = await apiService.delete<ResponseResource<null>>(
      ConfigServiceEndpoint.region.delete,
      { data: { region_id: regionId } },
    );
    return response.data;
  },
};

export default RegionServices;
