import ConfigServiceEndpoint from ".";
import apiService from "../../../api.service.config";
import type { ResponseResource } from "../../../utils/response.resource";
import type { EducationLevelFormValues } from "../schemas/education.level.schema";
import type { EducationLevel } from "../types/education.type";

const EducationLevelServices = {
  async getEducationLevels(): Promise<ResponseResource<EducationLevel[]>> {
    const response = await apiService.get<ResponseResource<EducationLevel[]>>(
      ConfigServiceEndpoint.educationLevel.get,
    );

    return response.data;
  },

  async addEducationLevel(
    data: EducationLevelFormValues,
  ): Promise<ResponseResource<null>> {
    const response = await apiService.post<ResponseResource<null>>(
      ConfigServiceEndpoint.educationLevel.add,
      data,
    );
    return response.data;
  },

  async updateEducationLevel(
    data: EducationLevelFormValues,
  ): Promise<ResponseResource<null>> {
    const response = await apiService.put<ResponseResource<null>>(
      ConfigServiceEndpoint.educationLevel.update,
      data,
    );
    return response.data;
  },

  async removeEducationLevel(levelId: string): Promise<ResponseResource<null>> {
    const response = await apiService.delete<ResponseResource<null>>(
      ConfigServiceEndpoint.educationLevel.delete,
      { data: { level_id: levelId } },
    );

    return response.data;
  },
};

export default EducationLevelServices;
