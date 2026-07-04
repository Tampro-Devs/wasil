const CONFIGS_BASE_URL = `/configs`;

const ConfigServiceEndpoint = {
  educationLevel: {
    add: `${CONFIGS_BASE_URL}/add-education-level`,
    get: `${CONFIGS_BASE_URL}/get-education-levels`,
    update: `${CONFIGS_BASE_URL}/update-education-level`,
    delete: `${CONFIGS_BASE_URL}/remove-education-level`,
  },
  region: {
    add: `${CONFIGS_BASE_URL}/add-region`,
    get: `${CONFIGS_BASE_URL}/get-regions`,
    update: `${CONFIGS_BASE_URL}/update-region`,
    delete: `${CONFIGS_BASE_URL}/remove-region`,
  },
  district: {
    add: `${CONFIGS_BASE_URL}/add-district`,
    get: `${CONFIGS_BASE_URL}/get-districts`,
    update: `${CONFIGS_BASE_URL}/update-district`,
    delete: `${CONFIGS_BASE_URL}/remove-district`,
  },
  ward: {
    add: `${CONFIGS_BASE_URL}/add-ward`,
    get: `${CONFIGS_BASE_URL}/get-wards`,
    update: `${CONFIGS_BASE_URL}/update-ward`,
    delete: `${CONFIGS_BASE_URL}/remove-ward`,
  },
  street: {
    add: `${CONFIGS_BASE_URL}/add-street`,
    get: `${CONFIGS_BASE_URL}/get-streets`,
    update: `${CONFIGS_BASE_URL}/update-street`,
    delete: `${CONFIGS_BASE_URL}/remove-street`,
  },
};

export default ConfigServiceEndpoint;
