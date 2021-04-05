import axios from "axios";

import { Api } from "./services";
axios.defaults.baseURL = "http://localhost:5000/api";
class ApiClient {
  Api = new Api(axios);

  buildServices = (url) => {
    axios.defaults.baseURL = url || "http://localhost:5000/api";

    this.Api = new Api(axios);
  };
}

export const apiClient = new ApiClient();
