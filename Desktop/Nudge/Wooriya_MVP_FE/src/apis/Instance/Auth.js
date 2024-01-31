import axios from "axios";
import * as AxiosLogger from "axios-logger";
import Cookies from "js-cookie";
import dotenv from "dotenv";

dotenv.config();
// const baseURL =
//     process.env.MOD === "production"
//         ? process.env.PROD_API_BASE_URL
//         : process.env.DEV_API_BASE_URL;
const baseURL = "http://localhost:8080/";

console.log(baseURL);
const AuthInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});

AuthInstance.interceptors.request.use(AxiosLogger.requestLogger);
AuthInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    AxiosLogger.requestLogger(config);
    return config;
});

AuthInstance.interceptors.response.use(
    (response) => {
        const { accessToken, refreshToken } = response.data;
        if (accessToken) {
            localStorage.setItem("accessToken", accessToken);
        }
        if (refreshToken) {
            Cookies.set("refreshToken", refreshToken, {
                secure: true,
                sameSite: "Strict",
            });
        }

        AxiosLogger.responseLogger(response);
        return response;
    },
    (error) => {
        AxiosLogger.errorLogger(error);
        return Promise.reject(error);
    }
);

export default AuthInstance;
