import axios from "axios";

import { getAuthHeader } from "../contexts/Auth/Auth";
import { API_URL } from "../env";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${getAuthHeader()}`;

  return config;
});

export default api;
