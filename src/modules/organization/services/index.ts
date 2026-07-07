const ORGANIZATION_BASE_URL = "/organization";

const OrganizationServiceEndpoint = {
  branch: {
    add: `${ORGANIZATION_BASE_URL}/add-branch`,
    getInfo: `${ORGANIZATION_BASE_URL}/get-branch-details`,
    get: `${ORGANIZATION_BASE_URL}/get-branches`,
    members: `${ORGANIZATION_BASE_URL}/get-branch-members`,
    update: `${ORGANIZATION_BASE_URL}/update-branch`,
  },
  leader: {
    add: `${ORGANIZATION_BASE_URL}/add-leader`,
    get: `${ORGANIZATION_BASE_URL}/get-leaders`,
    update: `${ORGANIZATION_BASE_URL}/update-leader`,
  },
  leadership: {
    add: `${ORGANIZATION_BASE_URL}/add-leadership`,
    get: `${ORGANIZATION_BASE_URL}/get-leaderships`,
    update: `${ORGANIZATION_BASE_URL}/update-leadership`,
  },
};

export default OrganizationServiceEndpoint;
