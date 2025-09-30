import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { LoginResponse, type LoginType, type RegisterType } from "@/types/auth/types"
import { authServices } from "@/services/auth/auth-services"
import { AxiosErrorHandler } from "@/utils/axios-handler"
import { RequestHandler } from "@/constant/request-handler"
import { AxiosError } from "axios"

export const useLogin = () => {
    const qc = useQueryClient();

    return useMutation<LoginResponse['user'], AxiosError |  Error, LoginType>({
        mutationKey: ["auth", "login"],
        mutationFn: async (credentials: LoginType) => {
            const user = await authServices.login(credentials); 
            if(!user) throw new Error(RequestHandler.UNEXPECTED_ERROR); 
            return user;
        },
        onSuccess: (user) => {
            qc.setQueryData(["me"], user);
        }, 
        onError: (error) => {
            if(error instanceof AxiosErrorHandler){
                throw new Error (error.message || RequestHandler.UNEXPECTED_ERROR);
            }else{
                throw new Error (RequestHandler.UNEXPECTED_ERROR);
            }
        }
    })
};

export const useRegister = () => {
    return useMutation<void, AxiosError | Error, RegisterType>({
        mutationKey: ["auth", "register"],
        mutationFn: async (userInfo: RegisterType) => {
            await authServices.register(userInfo);
        },
        onSuccess: () => {
            console.log("okay");
        },
        onError: (error) => {
            if(error instanceof AxiosErrorHandler){
                throw new Error(error.message || RequestHandler.UNEXPECTED_ERROR);
            }else{
                throw new Error(RequestHandler.UNEXPECTED_ERROR);
            }
        } 
    })
}

export const useRefreshSession = () => {
    const qc = useQueryClient();
    
    return useQuery({
        queryKey: ["auth", "refresh session"],
        queryFn: async () => {
            const data = await authServices.refreshSession();
            const user = { 
                firstName: data?.firstName,
                lastName: data?.lastName,
                email: data?.email
            }

            if(data) qc.setQueryData(["me"], user);
        }, 
    })
}