import React, { useState, createContext, useEffect } from "react";
import { User } from '../models/user';
import { getLocalUser } from "../utils/localStorageService";

export const GlobalContext = createContext({})
export const GlobalConsumer = GlobalContext.Consumer;

export function AuthContext(props: any) {

    const [currentUser, setCurrentUser] = useState<User>();

    useEffect(() => {
        const user = getLocalUser();
        setCurrentUser(user);
    }, [])

    return (
        <GlobalContext.Provider value={{ setCurrentUser, currentUser }}>
            {props.children}
        </GlobalContext.Provider>
    )

}
