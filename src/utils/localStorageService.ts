import { User } from './../models/user';

export const setLocalUser = (user: User) => {
    localStorage.setItem('@app/user', JSON.stringify(user));
}

export const getLocalUser = () => {
    const user = localStorage.getItem('@app/user');
    return user ? JSON.parse(user || '') : {};
}

export const clear = () => {
    localStorage.clear();
}