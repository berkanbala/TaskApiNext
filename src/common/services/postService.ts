import { dersigoApiClient } from "../clients/getApiClient";
import { IPost, IPostDetails } from "../models/posts";

export const getPosts = async (): Promise<IPost[]> => {
  const { data } = await dersigoApiClient.get("post?limit=10");

  return data?.data;
};

export const getPostById = async (id: string): Promise<IPostDetails> => {
  const { data } = await dersigoApiClient.get(`post/${id}`);

  return data;
};
