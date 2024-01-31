import React from "react";
import styles from "@/app/styles/main/procedure.module.css";

const StepThree = () => {
    return (
        <div className={styles.container}>
            <div className={styles.OneContainer}>
                <div className={styles.flexcontainer}>
                    <span className={styles.bluefont}>STEP 03</span>
                    <div className={styles.blackfont}>제휴 조건 확인 및 승인 </div>
                    <div className={styles.grayfont}>
                        <div>제휴 제안이 올 경우 이메일로 알려드리며,</div>
                        <div>승인이 완료된 경우 별도 미팅 없이 해당 기업과의</div>
                        <div>제휴 협약을 전자 서명으로 간편하게 체결할 수 있습니다.</div>
                    </div>
                </div>
                <div className={styles.flexcontainer}>
                    <img
                        className={styles.webpImage}
                        src="/img/main_thrid.svg"
                        alt="main_thrid"
                    />
                </div>
            </div>
        </div>
    );
};

export default StepThree;
