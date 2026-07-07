import OrganizationServiceEndpoint from ".";
import apiService from "../../../api.service.config";
import type { ResponseResource } from "../../../utils/response.resource";
import type { Member } from "../../members/types/member.type";
import type { BranchFormValues } from "../schemas/branch.form.schema";
import type { Branch } from "../types/branch.type";

const BranchServices = {
  async addBranch(
    data: BranchFormValues,
  ): Promise<ResponseResource<Branch | null>> {
    const response = await apiService.post<ResponseResource<Branch | null>>(
      OrganizationServiceEndpoint.branch.add,
      data,
    );
    return response.data;
  },

  async getBranches(): Promise<ResponseResource<Branch[]>> {
    const response = await apiService.get<ResponseResource<Branch[]>>(
      OrganizationServiceEndpoint.branch.get,
      //   { params: { name: name } },
    );
    return response.data;
  },

  async getBranchDetails(branchId: string): Promise<ResponseResource<Branch>> {
    const response = await apiService.get<ResponseResource<Branch>>(
      OrganizationServiceEndpoint.branch.getInfo,
      { params: { branch_id: branchId } },
    );
    return response.data;
  },

  async getBranchMembers(
    branchId: string,
  ): Promise<ResponseResource<Member[]>> {
    const response = await apiService.get<ResponseResource<Member[]>>(
      OrganizationServiceEndpoint.branch.members,
      { params: { branch_id: branchId } },
    );
    return response.data;
  },

  async updateBranch(
    data: BranchFormValues,
  ): Promise<ResponseResource<Branch | null>> {
    const response = await apiService.put<ResponseResource<Branch | null>>(
      OrganizationServiceEndpoint.branch.update,
      data,
    );
    return response.data;
  },
};

export default BranchServices;
