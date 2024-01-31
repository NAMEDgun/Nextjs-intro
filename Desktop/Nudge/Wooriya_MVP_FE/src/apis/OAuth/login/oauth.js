import basicInstance from "../../Instance/Auth";

const getRedirectKaKao = async () => {
    try {
        const response = await basicInstance.get(`/user/login/oauth2`);
        return response;
    } catch (error) {
        console.error("getRedirectKaKao 요청 중 오류 발생:", error);
        throw error;
    }
};

const getAccessToKaKaoOAuth = async (code) => {
    try {
        const response = await basicInstance.get(
            `/user/login/oauth2/code/kakao`,
            {
                params: {
                    code: code,
                },
            }
        );
        return response;
    } catch (error) {
        console.error("getAccessToKaKaoOAuth 요청 중 오류 발생:", error);
        throw error;
    }
};

export { getRedirectKaKao, getAccessToKaKaoOAuth };
