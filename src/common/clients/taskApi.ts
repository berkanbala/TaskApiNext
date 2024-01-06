import axios from "axios";

export const TaskApi = () => {
  if (process.env.REACT_APP_API_URL)
    console.warn("cannot fing appConfig baseUrl");

  const apiClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
      "app-id": "6599131a502a44c29671781f",
    },
  });

  return apiClient;
};
