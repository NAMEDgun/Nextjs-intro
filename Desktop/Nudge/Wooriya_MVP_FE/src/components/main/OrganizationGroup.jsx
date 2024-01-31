import React from "react";
import OrganizationCard from "../OraganizationCard";
import styles from "@/app/styles/organizaitonCard.module.css";

const OrganizationGroup = () => {
    return (
        <div className={styles.marginTop}>
            <div className={`${styles.blackfont} ${styles.BigBlack}`}>
                우리가 무료로
            </div>
            <div className={`${styles.blackfont} ${styles.BigBlack}`}>
                받을 수 있는 제휴 혜택
            </div>
            <div
                className={`${styles.flexRowContainer}`}
                style={{
                    margin: "5vw 21vw 7.5vw 21vw",
                    justifyContent: "space-between",
                }}
            >
                <OrganizationCard
                    imgPath="/img/org_test_1.png"
                    tags={["스포츠/레저"]}
                    title="구로역 5분거리 헬스장 20% 할인"
                    specs={["구로동", "동호회", "기업", "10인이상"]}
                    status={"상시모집"}
                />

                <OrganizationCard
                    imgPath="/img/org_test_2.png"
                    tags={["의료"]}
                    title="아주대 도보 3분거리 치과 무료 건강검진"
                    specs={["구로동", "동호회", "기업", "10인이상"]}
                    status={"D-7"}
                />

                <OrganizationCard
                    imgPath="/img/org_test_3.png"
                    tags={["스포츠/레저"]}
                    title="구로역 5분거리 헬스장 20% 할인"
                    specs={["구로동", "동호회", "기업", "10인이상"]}
                    status={"오늘까지"}
                />
            </div>
        </div>
    );
};

export default OrganizationGroup;
