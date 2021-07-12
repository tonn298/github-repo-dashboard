import axios from "axios";

import { endpoint, baseUrl } from "./config";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getGithubRepositories = async () => {
  const data = await axiosInstance
    .get(endpoint, {})
    .then((response) => {
      const result = response.data;
      return result;
    })
    .catch((e) => console.log(e));
  return data;
};
