import { AuthServicesType, LoginType, RegisterType, SessionType } from "@/types/auth/types";

export const authServices:AuthServicesType = {
    login: async (credentials: LoginType): Promise<SessionType> => {
        const sampleData:SessionType = {
            firstName: "test",
            lastName: "test",
            email: "test@gmail.com"
        };
        return sampleData;
    },
    register: async (values: RegisterType): Promise<boolean> => {
        console.log("congrats you registered.");
        return true;
    },
    refreshSession: async (): Promise<SessionType | null> => {
        const sampleData:SessionType = {
            firstName: "test",
            lastName: "test",
            email: "test@gmail.com"
        };

        return sampleData;
    }
}