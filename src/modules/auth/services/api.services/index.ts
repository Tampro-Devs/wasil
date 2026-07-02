import apiService from "../../../../api.service.config";
import type { SignInFormValues } from "../../schema/signing.form.schema";

const AUTH_BASE_URL = `/accounts`;
const AUTH_ENDPOINT = `${AUTH_BASE_URL}/authenticate`;

export function authenticate(data: SignInFormValues) {
  return apiService.post(AUTH_ENDPOINT, data, {
    headers: { "X-Medium-App": "Web" },
  });
}
