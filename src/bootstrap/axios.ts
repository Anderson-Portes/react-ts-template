import axios, { AxiosResponse } from "axios";
import { constraints } from "./constraints";

interface ApiError {
  response: AxiosResponse
}

const api = axios.create({
  baseURL: constraints.apiUrl,
  headers: {
    common: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "
    }
  }
});

api.interceptors.response.use(r => r, (error: ApiError) => {
  if(error.response.status === 401) {
    //Unanteticated
  }
  if(error.response.status === 403) {
    //Unanthorizaded
  }
  throw error;
});

export default api;