import { dersigoApiClient } from "../clients/getApiClient";
import { IUserDetails } from "../models/userDetails";
import { IAllUsers } from "../models/users";

export const getUsers = async (): Promise<IAllUsers[]> => {
  const { data } = await dersigoApiClient.get("user?limit=10");
  // console.log(data?.data[0]);
  return data?.data;
};

export const getUserById = async (id: string): Promise<IUserDetails> => {
  const { data } = await dersigoApiClient.get(`user/${id}`, {
    // params: { limit: 10 },
  });
  console.log(data);

  return data;
};
