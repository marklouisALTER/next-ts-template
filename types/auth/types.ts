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

export type LoginServicesType = {
    login: (credentials: LoginType) => Promise<boolean>;
    register: (userInfo: RegisterType) => Promise<boolean>;
}