"use client";

import { createContext, useContext } from "react";

const AppContext = createContext<IAppContext>({} as any);
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: Props) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

interface Props {
  children: React.ReactNode;
}

interface IAppContext {}
