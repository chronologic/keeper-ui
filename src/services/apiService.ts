import axios from "axios";

import { API_URL } from "../env";
import { getAuthHeader } from "../utils";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${getAuthHeader()}`;

  return config;
});

export default api;
