import axios from "axios";
import { useUtils } from "../utils/useUtils";

export const axiosInstance = axios.create({
    baseURL: "http://152.42.240.131/", headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(async (config) => {
    let cookieValue = await useUtils().getCookie("token");
    console.log("TOKEN", cookieValue);
    if (cookieValue) {
        config.headers['Authorization'] = `Bearer ${cookieValue.value}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});