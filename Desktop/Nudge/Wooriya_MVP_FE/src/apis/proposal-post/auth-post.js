import AuthInstance from "../Instance/Auth";

const postProposalBoard = async (
    title,
    affiliateKinds,
    affiliateForm,
    affiliatePeriod,
    recruitmentPeriod,
    prLinks,
    photos,
    detail
) => {
    try {
        const response = await AuthInstance.post(`/proposal-post/post`, {
            title: title,
            affiliateKinds: affiliateKinds,
            affiliateForm: affiliateForm,
            affiliatePeriod: affiliatePeriod,
            recruitmentPeriod: recruitmentPeriod,
            prLinks: prLinks,
            photos: photos,
            detail: detail,
        });
        return response.data;
    } catch (error) {
        console.error("postProposalBoard 요청 중 오류 발생:", error);
        throw error;
    }
};

const postProposalSend = async (postId, message) => {
    try {
        const response = await AuthInstance.post(`/proposal-post/send`, {
            postId: postId,
            message: message,
        });
        return response.data;
    } catch (error) {
        console.error("postProposalSend 요청 중 오류 발생:", error);
        throw error;
    }
};

const postUpdateProposalBoard = async (
    id,
    title,
    affiliateKinds,
    affiliateForm,
    affiliatePeriod,
    recruitmentPeriod,
    prLinks,
    photos,
    detail
) => {
    try {
        const response = await AuthInstance.post(
            `/proposal-post/update/${id}`,
            {
                title: title,
                affiliateKinds: affiliateKinds,
                affiliateForm: affiliateForm,
                affiliatePeriod: affiliatePeriod,
                recruitmentPeriod: recruitmentPeriod,
                prLinks: prLinks,
                photos: photos,
                detail: detail,
            }
        );
        return response.data;
    } catch (error) {
        console.error("postUpdateProposalBoard 요청 중 오류 발생:", error);
        throw error;
    }
};

export { postProposalBoard, postProposalSend, postUpdateProposalBoard };
