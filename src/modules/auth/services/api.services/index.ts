import apiService from "../../../../api.service.config";
import type { PasswordChangeRequestFormValues } from "../../schema/password.change.request.form.schema";
import type { PasswordUpdateFormValues } from "../../schema/password.update.form.schema";
import type { SignInFormValues } from "../../schema/signing.form.schema";

const AUTH_BASE_URL = `/accounts`;
const AUTH_ENDPOINT = `${AUTH_BASE_URL}/authenticate`;
const PASSWORD_CHANGE_REQUEST_ENDPOINT = `${AUTH_BASE_URL}/request-password-change`;
const PASSWORD_UPDATE_ENDPOINT = `${AUTH_BASE_URL}/update-password`;
const ACTIVATE_ACCOUNT_ENDPOINT = `${AUTH_BASE_URL}/activate-account`;

const AuthServices = {
  async authenticate(data: SignInFormValues) {
    return apiService.post(AUTH_ENDPOINT, data, {
      headers: { "X-Medium-App": "Web" },
    });
  },

  async requestPasswordChange(data: PasswordChangeRequestFormValues) {
    return apiService.post(PASSWORD_CHANGE_REQUEST_ENDPOINT, data);
  },

  async updatePassword(data: PasswordUpdateFormValues) {
    return apiService.put(PASSWORD_UPDATE_ENDPOINT, data);
  },

  async activateAccount(token: string) {
    return apiService.put(ACTIVATE_ACCOUNT_ENDPOINT, { token: token });
  },
};

export default AuthServices;
