import apiService from "../../../api.service.config";
import type { ResponseResource } from "../../../utils/response.resource";
import type { EducationLevel } from "../types/education.type";

const CONFIGS_BASE_URL = `/configs`;
const GET_EDUCATION_LEVELS_ENDPOINT = `${CONFIGS_BASE_URL}/get-education-levels`;
const REMOVE_EDUCATION_LEVEL_ENDPOINT = `${CONFIGS_BASE_URL}/remove-education-level`;

export const getEducationLevels = async (): Promise<
  ResponseResource<EducationLevel[]>
> => {
  const response = await apiService.get<ResponseResource<EducationLevel[]>>(
    GET_EDUCATION_LEVELS_ENDPOINT,
  );

  return response.data;
};

export const removeEducationLevel = async (
  levelId: string,
): Promise<ResponseResource<null>> => {
  const response = await apiService.delete<ResponseResource<null>>(
    REMOVE_EDUCATION_LEVEL_ENDPOINT,
    { data: { level_id: levelId } },
  );

  return response.data;
};
