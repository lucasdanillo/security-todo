import React, { useState, createContext, useEffect } from "react";
import { User, UserRole } from '../models/user';

export const GlobalContext = createContext({})
export const GlobalConsumer = GlobalContext.Consumer;

export function AuthContext(props: any) {

    const [currentUser, setCurrentUser] = useState<User>();

    return (
        <GlobalContext.Provider value={{ setCurrentUser, currentUser }}>
            {props.children}
        </GlobalContext.Provider>
    )

}
