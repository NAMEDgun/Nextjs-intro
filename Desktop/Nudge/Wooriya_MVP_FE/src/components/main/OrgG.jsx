import React from "react";
import styles from "@/app/styles/organizaitonCard.module.css";
import OrganizationCard from "../OraganizationCard";

const OrgG = () => {
    return (
        <div>
            <div className={styles.aiImg}>
                <img src="/img/wooriya_ai.svg"></img>
            </div>
            <div className={` ${styles.mdBlack}`}>
                관리자에게 AI가 추천하는 제휴 혜택
            </div>
            <div
                className={`${styles.flexRowContainer} ${styles.ssmMarginTop}`}
            >
                <OrganizationCard
                    imgPath="/img/org_test_1.png"
                    tags={["스포츠/레저"]}
                    title="구로역 5분거리 헬스장 20% 할인"
                    specs={["구로동", "동호회", "기업", "10인이상"]}
                    status={-1} // 상시모집
                />

                <OrganizationCard
                    imgPath="/img/org_test_2.png"
                    tags={["의료"]}
                    title="아주대 도보 3분거리 치과 무료 건강검진"
                    specs={["구로동", "동호회", "기업", "10인이상"]}
                    status={7}
                />

                <OrganizationCard
                    imgPath="/img/org_test_3.png"
                    tags={["스포츠/레저"]}
                    title="구로역 5분거리 헬스장 20% 할인"
                    specs={["구로동", "동호회", "기업", "10인이상"]}
                    status={0} // 오늘
                />
            </div>
            <div className={` ${styles.mdBlack} ${styles.ssmMarginTop}`}>
                디양한 제휴 혜택을 만나보세요
            </div>
            <div className={`${styles.flexRowContainer} ${styles.smMarginTop}`}>
                <OrganizationCard
                    imgPath="/img/org_test_4.png"
                    tags={["스포츠/레저"]}
                    title="업체명 이용권 20% 할인"
                    specs={["구로동", "동호회", "기업", "10인이상"]}
                    status={-1} // 상시모집
                />

                <OrganizationCard
                    imgPath="/img/org_test_5.png"
                    tags={["스포츠/레저"]}
                    title="업체명 이용권 20% 할인"
                    specs={["구로동", "동호회", "기업", "10인이상"]}
                    status={0}
                />

                <OrganizationCard
                    imgPath="/img/org_test_6.png"
                    tags={["스포츠/레저"]}
                    title="업체명 이용권 20% 할인"
                    specs={["구로동", "동호회", "기업", "10인이상"]}
                    status={0} // 오늘
                />
            </div>
        </div>
    );
};

export default OrgG;
