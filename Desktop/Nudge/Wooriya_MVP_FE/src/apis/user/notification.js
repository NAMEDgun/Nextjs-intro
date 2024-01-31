import AuthInstance from "../Instance/Auth";
import basicInstance from "../Instance/basic";
const getUserNotification = async () => {
    try {
        const response = await AuthInstance.get(`/user/notification`);
        return response.data;
    } catch (error) {
        console.error("getUserNotification 요청 중 오류 발생:", error);
        throw error;
    }
};

const postUserNotificationById = async (id) => {
    try {
        const reposne = await basicInstance.post(
            `/user/notification/read/${id}`
        );
        return reposne.data;
    } catch (error) {
        console.error("postUserNotificationById 요청 중 오류 발생:", error);
        throw error;
    }
};

export { getUserNotification, postUserNotificationById };
