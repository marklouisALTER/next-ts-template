import { useMutation } from "@tanstack/react-query"
import type { LoginType } from "@/types/auth/types"
import { loginServices } from "@/services/auth/login-services"
import { AxiosErrorHandler } from "@/utils/axios-handler"
import { RequestHandler } from "@/constant/request-handler"

export const useLogin = () => {
    return useMutation({
        mutationKey: ["auth", "login"],
        mutationFn: async (credentials: LoginType) => {
            const user = await loginServices.login(credentials);
            if(!user) throw new Error("Login Failed");
            return user;
        },
        onSuccess: (user) => {
            // ok
            console.log(user);
        }, 
        onError: (error) => {
            if(error instanceof AxiosErrorHandler){
                throw new Error (error.message || RequestHandler.UNEXPECTED_ERROR)
            }else{
                throw new Error (RequestHandler.UNEXPECTED_ERROR)
            }
        }
    })
}