import basicInstance from "../Instance/basic";

const getProposalBoard = async () => {
    try {
        const response = await basicInstance.get(`/proposal-post`);
        return response.data;
    } catch (error) {
        console.error("getProposalBoard 요청 중 오류 발생:", error);
        throw error;
    }
};

const getProposalBoardById = async (id) => {
    try {
        const response = await basicInstance.get(`/proposal-post/${id}`);
        return response.data;
    } catch (error) {
        console.error(`getProposalBoardById 요청 중 오류 발생: ${error}`);
        throw error;
    }
};

export { getProposalBoard, getProposalBoardById };
