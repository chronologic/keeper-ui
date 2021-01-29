import axios from "axios";
import EventEmitter from "events";

import { getAuthHeader, removeAuthHeader } from "../contexts/Auth/Auth";
import { API_URL } from "../env";

// const ee = new EventEmitter();

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${getAuthHeader()}`;

  return config;
});

// api.interceptors.response.use((res) => {
//   if (res.status === 401) {
//     removeAuthHeader();
//     ee.emit("logout");
//   }

//   return res;
// });

export default api;
