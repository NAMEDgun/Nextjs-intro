import React from "react";
import styles from "@/app/styles/organizaitonCard.module.css";
import OrganizationCard from "@/components/OraganizationCard";

export default function BenefitsSearch() {
    return (
        <>
            <div className={`${styles.flexRowContainer} ${styles.marginTop}`}>
                <div className={styles.imgSize}>
                    <OrganizationCard
                        imgPath="/img/org_test_1.png"
                        tags={["스포츠/레저"]}
                        title="구로역 5분거리 헬스장 20% 할인"
                        specs={["구로동", "동호회", "기업", "10인이상"]}
                        status={-1}
                        className={styles.imgSize}
                    />
                </div>
                <div className={styles.imgSize}>
                    <OrganizationCard
                        imgPath="/img/org_test_2.png"
                        tags={["의료"]}
                        title="아주대 도보 3분거리 치과 무료 건강검진"
                        specs={["구로동", "동호회", "기업", "10인이상"]}
                        status={7}
                        className={styles.imgSize}
                    />
                </div>
                <div className={styles.imgSize}>
                    <OrganizationCard
                        imgPath="/img/org_test_3.png"
                        tags={["스포츠/레저"]}
                        title="구로역 5분거리 헬스장 20% 할인"
                        specs={["구로동", "동호회", "기업", "10인이상"]}
                        status={0}
                    />
                </div>
            </div>
            <div
                className={`${styles.flexRowContainer} ${styles.ssmMarginTop}`}
            >
                <div className={styles.imgSize}>
                    <OrganizationCard
                        imgPath="/img/org_test_4.png"
                        tags={["스포츠/레저"]}
                        title="구로역 5분거리 헬스장 20% 할인"
                        specs={["구로동", "동호회", "기업", "10인이상"]}
                        status={-1}
                        className={styles.imgSize}
                    />
                </div>
                <div className={styles.imgSize}>
                    <OrganizationCard
                        imgPath="/img/org_test_5.png"
                        tags={["의료"]}
                        title="아주대 도보 3분거리 치과 무료 건강검진"
                        specs={["구로동", "동호회", "기업", "10인이상"]}
                        status={7}
                        className={styles.imgSize}
                    />
                </div>
                <div className={styles.imgSize}>
                    <OrganizationCard
                        imgPath="/img/org_test_6.png"
                        tags={["스포츠/레저"]}
                        title="구로역 5분거리 헬스장 20% 할인"
                        specs={["구로동", "동호회", "기업", "10인이상"]}
                        status={0}
                    />
                </div>
            </div>
        </>
    );
}
