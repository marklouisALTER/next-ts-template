import axios from "axios";
import { API } from "@/constant/api";

export const api = axios.create({
    baseURL: API.BASE_URL,
    withCredentials: true
});