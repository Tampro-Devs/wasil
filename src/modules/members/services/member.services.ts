import MemberServiceEndpoint from ".";
import apiService from "../../../api.service.config";
import type { ResponseResource } from "../../../utils/response.resource";
import type { MemberFilterFormValues } from "../schema/member.filter.schema";
import type { MemberRegisterFormValues } from "../schema/member.register.for.schema";
import type { Member, MemberInfo } from "../types/member.type";

const MemberServices = {
  async registerMember(
    data: MemberRegisterFormValues,
  ): Promise<ResponseResource<Member | null>> {
    const response = await apiService.post<ResponseResource<Member | null>>(
      MemberServiceEndpoint.member.register,
      data,
    );
    return response.data;
  },

  async getMembers(
    params: MemberFilterFormValues,
  ): Promise<ResponseResource<Member[]>> {
    const response = await apiService.get<ResponseResource<Member[]>>(
      MemberServiceEndpoint.member.get,
      { params: params },
    );
    return response.data;
  },

  async getMemberDetails(
    memberId: string,
  ): Promise<ResponseResource<MemberInfo>> {
    const response = await apiService.get<ResponseResource<MemberInfo>>(
      MemberServiceEndpoint.member.getInfo,
      { params: { member_id: memberId } },
    );
    return response.data;
  },

  async updateMember(
    data: MemberRegisterFormValues,
  ): Promise<ResponseResource<Member | null>> {
    const response = await apiService.put<ResponseResource<Member | null>>(
      MemberServiceEndpoint.member.update,
      data,
    );
    return response.data;
  },
};

export default MemberServices;
