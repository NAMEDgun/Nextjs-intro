import basicInstance from "@/apis/Instance/basic";

const postLoginInfo = async (email, password, isCompany) => {
    try {
        const response = await basicInstance.post(`/auth/login`, {
            email: email,
            password: password,
            isCompany: isCompany,
        });
        return response.data;
    } catch (error) {
        console.error("postLoginInfo 요청 중 오류 발생:", error);
        throw error;
    }
};

export { postLoginInfo };
