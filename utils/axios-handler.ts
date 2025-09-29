import { AxiosRequestConfig } from "axios";

export class AxiosErrorHandler extends Error {
    code?: string;
    config?: AxiosRequestConfig;

    constructor(message: string, code?: string, config?: AxiosRequestConfig){
        super(message);

        this.name = "AxiosErrorHandler";
        this.code = code;
        this.config = config;
        this.message = message;

        Object.setPrototypeOf(this, AxiosErrorHandler.prototype);
    }

}