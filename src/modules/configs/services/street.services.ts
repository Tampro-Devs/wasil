import ConfigServiceEndpoint from ".";
import apiService from "../../../api.service.config";
import type { ResponseResource } from "../../../utils/response.resource";
import type { StreetFormValues } from "../schemas/street.form.schema";
import type { Street } from "../types/street.type";

const StreetServices = {
  async addStreet(
    data: StreetFormValues,
  ): Promise<ResponseResource<Street | null>> {
    const response = await apiService.post<ResponseResource<Street | null>>(
      ConfigServiceEndpoint.street.add,
      data,
    );
    return response.data;
  },

  async getStreets({
    wardId,
    name,
  }: {
    wardId: string;
    name?: string;
  }): Promise<ResponseResource<Street[]>> {
    const response = await apiService.get<ResponseResource<Street[]>>(
      ConfigServiceEndpoint.street.get,
      { params: { name: name, ward_id: wardId } },
    );
    return response.data;
  },

  async updateStreet(
    data: StreetFormValues,
  ): Promise<ResponseResource<Street | null>> {
    const response = await apiService.put<ResponseResource<Street | null>>(
      ConfigServiceEndpoint.street.update,
      data,
    );
    return response.data;
  },

  async removeStreet(streetId: string): Promise<ResponseResource<null>> {
    const response = await apiService.delete<ResponseResource<null>>(
      ConfigServiceEndpoint.street.delete,
      { data: { street_id: streetId } },
    );
    return response.data;
  },
};

export default StreetServices;
