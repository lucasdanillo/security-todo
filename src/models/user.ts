export enum UserRole {
    ADMIN,
    USER
}

export interface User {
    id?: string
    firstName?: string
    lastName?: string
    email?: string
    role?: UserRole
    accessToken?: string
}