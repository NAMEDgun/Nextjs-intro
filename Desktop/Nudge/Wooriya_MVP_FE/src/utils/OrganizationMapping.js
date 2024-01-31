export function mapKind(koreanWord) {
    const mapping = {
        "대학교/학생": "UNIV_STUDENT",
        비영리법인: "NON_PROFIT_CORP",
        "기타 공식 단체": "ETC_OFFICIAL",
        "기업(법인)": "CORP",
        "기타 비공식 단체": "ETC_UNOFFICIAL",
        "동아리/동호회": "CLUB",
    };

    return mapping[koreanWord] || "Unknown";
}

export function mapHistory(numberExpression) {
    console.log(numberExpression);
    const mapping = {
        "10명 이상": "OVER10",
        "50명 이상": "OVER50",
        "100명 이상": "OVER100",
        "500명 이상": "OVER500",
        "1,000명 이상": "OVER1000",
        "5,000명 이상": "OVER5000",
    };

    return mapping[numberExpression] || "Unknown";
}

export function mapAffiliateKind(kindNames) {
    const mapping = {
        "스포츠/레저": "SPORTS_LEISURE",
        의료: "MEDICAL",
        미용: "BEAUTY",
        교육: "EDUCATION",
        "문화/예술": "CULTURE_ART",
        생활: "LIFE",
        반려동물: "PET",
        음식: "FOOD",
        기타: "ETC",
    };

    return kindNames.map((kindName) => mapping[kindName] || "Unknown");
}

export function mapAffiliateForm(formName) {
    const mapping = {
        "무료 제공": "FREE",
        "제품/서비스 할인": "DISCOUNT",
        이익공유: "PROFIT_SHARING",
        "기타(협의 필요)": "ETC",
    };

    return mapping[formName] || "Unknown";
}

export function mapAffiliatePeriod(periodName) {
    const mapping = {
        협의가능: "DISCUSSION",
        "1년": "EXACT1",
        "1년이상": "OVER1",
    };

    return mapping[periodName] || "Unknown";
}

export function reverseMapKind(englishWord) {
    const mapping = {
        UNIV_STUDENT: "대학교/학생",
        NON_PROFIT_CORP: "비영리법인",
        ETC_OFFICIAL: "기타 공식 단체",
        CORP: "기업(법인)",
        ETC_UNOFFICIAL: "기타 비공식 단체",
        CLUB: "동아리/동호회",
    };

    return mapping[englishWord] || "Unknown";
}

export function reverseMapHistory(englishExpression) {
    const mapping = {
        OVER10: "10명 이상",
        OVER50: "50명 이상",
        OVER100: "100명 이상",
        OVER500: "500명 이상",
        OVER1000: "1,000명 이상",
        OVER5000: "5,000명 이상",
    };

    return mapping[englishExpression] || "Unknown";
}

export function reverseMapAffiliateKind(englishKindNames) {
    const mapping = {
        SPORTS_LEISURE: "스포츠/레저",
        MEDICAL: "의료",
        BEAUTY: "미용",
        EDUCATION: "교육",
        CULTURE_ART: "문화/예술",
        LIFE: "생활",
        PET: "반려동물",
        FOOD: "음식",
        ETC: "기타",
    };

    return englishKindNames.map(
        (englishKindName) => mapping[englishKindName] || "Unknown"
    );
}

export function reverseOneMapAffiliateKind(englishKindName) {
    const mapping = {
        SPORTS_LEISURE: "스포츠/레저",
        MEDICAL: "의료",
        BEAUTY: "미용",
        EDUCATION: "교육",
        CULTURE_ART: "문화/예술",
        LIFE: "생활",
        PET: "반려동물",
        FOOD: "음식",
        ETC: "기타",
    };

    return mapping[englishKindName] || "Unknown";
}

export function reverseMapAffiliateForm(englishFormName) {
    const mapping = {
        FREE: "무료 제공",
        DISCOUNT: "제품/서비스 할인",
        PROFIT_SHARING: "이익공유",
        ETC: "기타(협의 필요)",
    };

    return mapping[englishFormName] || "Unknown";
}

export function reverseMapAffiliatePeriod(englishPeriodName) {
    const mapping = {
        DISCUSSION: "협의가능",
        EXACT1: "1년",
        OVER1: "1년이상",
    };

    return mapping[englishPeriodName] || "Unknown";
}
