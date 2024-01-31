import axios from "axios";
import * as AxiosLogger from "axios-logger";
import dotenv from "dotenv";

dotenv.config();
// const baseURL =
//     process.env.MOD === "production"
//         ? process.env.PROD_API_BASE_URL
//         : process.env.DEV_API_BASE_URL;
const baseURL = "http://localhost:8080/";

console.log(baseURL);

const basicInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});

basicInstance.interceptors.request.use(AxiosLogger.requestLogger);
basicInstance.interceptors.response.use(
    (response) => {
        const accessToken = response.data.accessToken;
        if (accessToken) {
            localStorage.setItem("accessToken", accessToken);
        }

        AxiosLogger.responseLogger(response);
        return response;
    },
    (error) => {
        AxiosLogger.errorLogger(error);
        return Promise.reject(error);
    }
);

export default basicInstance;
