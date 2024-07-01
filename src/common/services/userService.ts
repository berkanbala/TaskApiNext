import { dersigoApiClient } from "../clients/getApiClient";
import { IUserDetails } from "../models/users/userDetails";
import { IAllUsers } from "../models/users/users";

export const getUsers = async (): Promise<IAllUsers[]> => {
  const { data } = await dersigoApiClient.get("user?limit=10");
  return data?.data;
};

export const getUserById = async (id: string): Promise<IUserDetails> => {
  const { data } = await dersigoApiClient.get(`user/${id}`, {});
  return data;
};
