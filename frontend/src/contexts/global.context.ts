import { Dispatch, SetStateAction, createContext, useContext } from "react";

export interface GlobalContextProps {
    username: string,
    isLoggedIn: boolean,
    isLoading: boolean,
    setUsername?: Dispatch<SetStateAction<string>>,
    setIsLoggedIn?: Dispatch<SetStateAction<boolean>>,
    setIsLoading?: Dispatch<SetStateAction<boolean>>,
    handleLogOut?: () => void,
}

export const globalDefaults = {
    username: "",
    isLoggedIn: false,
    isLoading: true
} 

export const GlobalContext = createContext<GlobalContextProps>(globalDefaults)

export const useGlobalContext = () => useContext<GlobalContextProps>(GlobalContext)