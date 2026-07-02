import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { store } from "../shared/store";

const baseURL = import.meta.env.VITE_WASIL_BASE_URL;
const apiService = axios.create();

apiService.defaults.baseURL = baseURL;
apiService.defaults.headers.common["Content-Type"] = "application/json";

apiService.interceptors.request.use(ON_REQUEST_FULFILLED, ON_REQUEST_REJECTED);

apiService.interceptors.response.use(
  ON_RESPONSE_FULFILLED,
  ON_RESPONSE_REJECTED,
);

async function ON_REQUEST_FULFILLED(config: InternalAxiosRequestConfig) {
  const state = store.getState();
  const token = state?.authSession?.user?.access_token;
  if (token) {
    config.headers.Authorization = `Bearer ${token ?? ""}`;
  }
  return config;
}

function ON_REQUEST_REJECTED(error: AxiosError) {
  return Promise.reject(error);
}

async function ON_RESPONSE_REJECTED(error: AxiosError) {
  return Promise.reject(error);
}

function ON_RESPONSE_FULFILLED(response: AxiosResponse) {
  return response;
}

export default apiService;
