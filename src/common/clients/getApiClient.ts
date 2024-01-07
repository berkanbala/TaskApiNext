import axios from "axios";
import { showNotification } from "../configs/notification";

const createApiClient = (options?: { baseUrl: string; appId: string }) => {
  if (!options?.baseUrl) {
    console.warn("not found react base api url");
  }

  const notify = (error: any) => showNotification("error", error);

  const apiClient = axios.create({
    baseURL: options?.baseUrl,
    headers: {
      "Content-Type": "application/json",
      "App-Id": options?.appId,
    },
  });

  apiClient.interceptors.request.use(
    async (config: any) => {
      return config;
    },
    async (error) => {
      Promise.reject(error);
    }
  );

  apiClient.interceptors.response.use(
    async (response) => {
      return response;
    },

    async (error) => {
      switch (error.response.status) {
        case 401:
          notify(error);
          return Promise.reject(error);
        case 404:
          notify(error);
          return Promise.reject(error);
        case 500:
          notify(error);
          return Promise.reject(error);
        default:
          return Promise.reject(error);
      }
    }
  );

  return apiClient;
};

const createDersigoClient = () => {
  return createApiClient({
    baseUrl: process.env.REACT_APP_API_URL!,
    appId: process.env.REACT_APP_API_ID!,
  });
};

export const dersigoApiClient = createDersigoClient();
