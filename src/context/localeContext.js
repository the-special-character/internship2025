'use client'
import { useContext } from "react";
import { createContext } from "react";

export const Context = createContext();

const LocaleProvider = ({ children }) => {
  return <Context.Provider value="hello world">{children}</Context.Provider>;
};

export const useLocale = () => useContext(Context);

export default LocaleProvider;



