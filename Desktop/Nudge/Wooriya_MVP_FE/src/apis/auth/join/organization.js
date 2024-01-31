import { mapHistory, mapKind } from "@/utils/OrganizationMapping";
import basicInstance from "../../Instance/basic";

const postOrganizationJoin = async (
    kind,
    history,
    email,
    password,
    organizationName,
    representativeName,
    representativeNum,
    organizationEmail,
    greetings
) => {
    const convertKind = mapKind(kind);
    const convertHistory = mapHistory(history);
    console.log(convertKind);
    try {
        const response = await basicInstance.post(`/auth/join/organization`, {
            kind: convertKind,
            history: convertHistory,
            email: email,
            password: password,
            organizationName: organizationName,
            representativeName: representativeName,
            representativeNum: representativeNum,
            organizationEmail: organizationEmail,
            greetings: greetings,
        });
        return response.data;
    } catch (error) {
        console.error("postOrganizationJoin 요청 중 오류 발생:", error);
        throw error;
    }
};

export { postOrganizationJoin };
