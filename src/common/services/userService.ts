import { dersigoApiClient } from "../clients/getApiClient";
import { IPost } from "../models/postData/post";
import { IUserDetails } from "../models/userData/userDetails";
import { IAllUsers } from "../models/userData/users";

export const getUsers = async (): Promise<IAllUsers[]> => {
  const { data } = await dersigoApiClient.get("user?limit=10");
  // console.log(data?.data[0]);
  return data?.data;
};

export const getUserById = async (id: string): Promise<IUserDetails> => {
  const { data } = await dersigoApiClient.get(`user/${id}`, {});
  // console.log(data);
  return data;
};

export const getPost = async (): Promise<IPost[]> => {
  const { data } = await dersigoApiClient.get("post?limit=10");
  // console.log(data);
  return data?.data;
};
