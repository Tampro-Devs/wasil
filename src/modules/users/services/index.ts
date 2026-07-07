const USERS_BASE_URL = `/users`;

const UsersServiceEndpoint = {
  role: {
    add: `${USERS_BASE_URL}/add-role`,
    get: `${USERS_BASE_URL}/get-roles`,
    update: `${USERS_BASE_URL}/update-role`,
    delete: `${USERS_BASE_URL}/remove-role`,
  },
  permission: {
    set: `${USERS_BASE_URL}/set-role-permissions`,
    get: `${USERS_BASE_URL}/get-role-permissions`,
  },
  user: {
    add: `${USERS_BASE_URL}/add-user`,
    get: `${USERS_BASE_URL}/get-users`,
    update: `${USERS_BASE_URL}/update-user`,
    delete: `${USERS_BASE_URL}/remove-user`,
  },
};

export default UsersServiceEndpoint;
