const MEMBER_BASE_URL = "/members";

const MemberServiceEndpoint = {
  member: {
    register: `${MEMBER_BASE_URL}/register-member`,
    get: `${MEMBER_BASE_URL}/get-members`,
    getInfo: `${MEMBER_BASE_URL}/get-member-details`,
    update: `${MEMBER_BASE_URL}/update-member`,
  },
};

export default MemberServiceEndpoint;
