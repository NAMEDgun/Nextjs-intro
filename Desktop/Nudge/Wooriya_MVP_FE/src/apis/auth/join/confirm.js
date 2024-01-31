import basicInstance from "../../Instance/basic";

const postEmailSend = async (email) => {
    try {
        const response = await basicInstance.post(
            `/auth/join/confirmcode/send`,
            {
                email: email,
            }
        );
        return response.data;
    } catch (error) {
        console.error("postEmailSend 요청 중 오류 발생:", error);
        throw error;
    }
};

const postEmailVerify = async (email, confirmCode) => {
    try {
        const response = await basicInstance.post(
            `/auth/join/confirmcode/verify`,
            {
                email: email,
                confirmCode: confirmCode,
            }
        );
        return response.data;
    } catch (error) {
        console.error("postEmailVerify 요청 중 오류 발생:", error);
        throw error;
    }
};

export { postEmailSend, postEmailVerify };
