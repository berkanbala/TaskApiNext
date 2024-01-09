"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { showNotification } from "../configs/notification";
import { IAllUsers } from "../models/userData/users";
import { getPost, getUsers } from "../services/userService";
import { IPost } from "../models/postData/post";

const AppContext = createContext<IAppContext>({} as any);
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<IAllUsers[]>([]);
  const [post, setPost] = useState<IPost[]>([]);

  useEffect(() => {
    const getAllUser = async () => {
      try {
        const response = await getUsers();
        setUsers([...response]);
        // console.log(response);
      } catch (error: any) {
        showNotification("error", error);
      }
    };

    getAllUser();
  }, []);

  useEffect(() => {
    const getAllPost = async () => {
      try {
        const response = await getPost();
        setPost([...response]);
        console.log(response);
      } catch (error: any) {
        showNotification("error", error);
      }
    };
    getAllPost();
  }, []);

  return (
    <AppContext.Provider
      value={{
        userList: {
          users,
          setUsers,
        },
        postList: {
          post,
          setPost,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

interface Props {
  children: React.ReactNode;
}

interface IAppContext {
  userList: {
    users: any;
    setUsers: (_val: any) => void;
  };
  postList: {
    post: any;
    setPost: (_val: any) => void;
  };
}
