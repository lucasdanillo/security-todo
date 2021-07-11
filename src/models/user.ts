export enum UserRole {
    USER,
    ADMIN
}

export interface User {
    id?: string
    firstName?: string
    lastName?: string
    email?: string
    role?: UserRole
    accessToken?: string
}