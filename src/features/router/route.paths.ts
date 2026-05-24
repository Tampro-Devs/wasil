const configsBase = "/configs";
const rolesBase = `${configsBase}/roles`;
const membershipBase = "/members";

const organisationBase = "/organisation";
const branchBase = `/branches`;
const leadershipBase = `/leadership`;
const financeBase = `/finance`;
const contributionBase = `/contribution`;

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
      register: `${membershipBase}/register`,
      preview: (memberId: string) => `${membershipBase}/${memberId}`,
    },
  },

  finance: {
    finance: {
      root: `${financeBase}`,
      contribution: `${contributionBase}`,
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
