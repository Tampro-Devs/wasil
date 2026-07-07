const MEMBER_BASE_URL = "/members";

const MemberServiceEndpoint = {
  member: {
    add: `${MEMBER_BASE_URL}/add-member`,
    get: `${MEMBER_BASE_URL}/get-members`,
    update: `${MEMBER_BASE_URL}/update-member`,
  },
};

export default MemberServiceEndpoint;
