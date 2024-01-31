import React from "react";
import JoinCard from "./JoinCard";
import styles from "@/app/styles/organizationBoard.module.css";

const JoinSituation = () => {
    return (
        <div className={styles.boardContainer}>
            <div className={styles.aijc}>
                <div className={styles.mt2}>
                    <div className={styles.mdblack}> 제휴 동참 현황 </div>
                    <div className={styles.smgray}>
                        지금까지 총 2개의 단체가 유사한 제휴를 찾고 있어요!
                    </div>
                </div>
                <div className={`${styles.mt2} ${styles.simpleflexColumn}`}>
                    <JoinCard
                        area="경기도 수원시 팔달구"
                        personnel="1만명 이상"
                        scale="대학교 / 학생단체"
                    />
                    <JoinCard
                        area="경기도 수원시 팔달구"
                        personnel="1만명 이상"
                        scale="대학교 / 학생단체"
                    />
                    <JoinCard
                        area="경기도 수원시 팔달구"
                        personnel="1만명 이상"
                        scale="대학교 / 학생단체"
                    />
                    <div className={styles.mb2} />
                </div>
            </div>
        </div>
    );
};

export default JoinSituation;
