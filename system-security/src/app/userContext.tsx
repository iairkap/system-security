"use client"
import { createContext, useContext, ReactNode } from 'react';
import { userInformation } from './helpers/userInformation';

interface UserContextType {
    userInfo: typeof userInformation[0];
}

export const UserContext = createContext<UserContextType>({
    userInfo: userInformation[0],
});

interface Props {
    children: ReactNode;
}

export default function GlobalContextProvider({ children }: Props) {

    return (
        <UserContext.Provider value={{ userInfo: userInformation[0] }}>
            {children}
        </UserContext.Provider>
    );
}