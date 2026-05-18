const configsBase = "/configs";
const rolesBase = `${configsBase}/roles`;
const membershipBase = "/members";

const organisationBase = "/organisation";
const branchBase = `/branches`;
const leadershipBase = `/leadership`;

export const ROUTE_PATHS = {
  auth: {
    signIn: "sign-in",
  },

  dashboard: {
    root: "/",
  },

  organisation: {
    root: organisationBase,
    leadership: {
      root: `${leadershipBase}`,
    },
    branches: {
      root: `${branchBase}`,
      preview: (branchId: string) => `${branchBase}/${branchId}`,
      onboard: `${branchBase}/onboard`,
    },
  },

  membership: {
    members: {
      root: `${membershipBase}`,
      preview: (memberId: string) => `${membershipBase}/${memberId}`,
    },
  },

  configs: {
    locations: {
      root: `${configsBase}/locations`,
    },

    education: {
      root: `${configsBase}/education`,
    },

    roles: {
      root: rolesBase,

      permissions: {
        root: `${rolesBase}/permissions`,
      },
    },
  },
};
