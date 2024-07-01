"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { showNotification } from "../configs/notification";
import { getUsers } from "../services/userService";
import { IAllUsers } from "../models/users";

const AppContext = createContext<IAppContext>({} as any);
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<IAllUsers[]>([]);

  useEffect(() => {
    const getAllUser = async () => {
      try {
        const response = await getUsers();
        setUsers([...response]);
      } catch (error: any) {
        showNotification("error", error);
      }
    };

    getAllUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        userList: {
          users,
          setUsers,
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
}
