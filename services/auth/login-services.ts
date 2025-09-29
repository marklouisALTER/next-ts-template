import { LoginServicesType, LoginType, RegisterType } from "@/types/auth/types";

export const loginServices:LoginServicesType = {
    login: async (credentials: LoginType): Promise<boolean> => {
        console.log(`Welcome!, you're email is ${credentials.email} and password ${credentials.password}`);
        return true;
    },
    register: async (values: RegisterType): Promise<boolean> => {
        console.log("congrats you registered.");
        return true;
    }
}