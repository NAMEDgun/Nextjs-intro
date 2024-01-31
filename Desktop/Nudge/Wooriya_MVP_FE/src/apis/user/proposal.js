import AuthInstance from "../Instance/Auth";

const getProposalSend = async () => {
    try {
        const response = await AuthInstance.get(`/user/proposal/send`);
        return response.data;
    } catch (error) {
        console.error("getProposalSend 요청 중 오류 발생:", error);
        throw error;
    }
};

const getProposalReceive = async () => {
    try {
        const response = await AuthInstance.get(`/user/proposal/receive`);
        return response.data;
    } catch (error) {
        console.error("getProposalReceive 요청 중 오류 발생:", error);
        throw error;
    }
};

const postProposalSelect = async (proposalId, select) => {
    try {
        const response = await AuthInstance.post(`/user/proposal/select`, {
            proposalId: proposalId,
            select: select,
        });
        return response.data;
    } catch (error) {
        console.error("postProposalSelect 요청 중 오류 발생:", error);
        throw error;
    }
};

export { getProposalSend, getProposalReceive, postProposalSelect };
