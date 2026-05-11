const configsBase = "/configs";
const rolesBase = `${configsBase}/roles`;
const membershipBase = "/membership";

const organisationBase = "/organisation";
const branchBase = `${organisationBase}/branches`;
const leadershipBase = `${organisationBase}/leadership`;

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
    },
  },

  membership: {
    members: {
      root: `${membershipBase}/members`,
    },
    userMembership: {
      root: (userId: string) => `${membershipBase}/${userId}`,
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
