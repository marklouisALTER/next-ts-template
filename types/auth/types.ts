export type LoginType = {
    email: string,
    password: string
}

export type RegisterType = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string;
}

export type AuthServicesType = {
    login: (credentials: LoginType) => Promise<SessionType>;
    register: (userInfo: RegisterType) => Promise<boolean>;
    refreshSession: () => Promise<SessionType | null>;
}

export type SessionType = {
    firstName: string, 
    lastName: string,
    email: string,
}

export type LoginResponse = {
    user: SessionType,
}