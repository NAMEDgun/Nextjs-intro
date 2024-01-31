import React from "react";
import styles from "@/app/styles/main/procedure.module.css";

const StepTwo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.TwoContainer}>
                <div className={styles.flexcontainer}>
                    <img
                        className={styles.webpImage}
                        src="/img/main_second.webp"
                        alt="main_second"
                    />
                </div>
                <div className={styles.flexcontainer}>
                    <span className={styles.bluefont}>STEP 02</span>
                    <div className={styles.blackfont}>알고리즘 기반 </div>
                    <div className={styles.blackfont}>최적 제휴처 추천</div>
                    <div className={styles.grayfont}>
                        <div>자체 알고리즘을 기반하여 우리 조건에 맞는</div>
                        <div>제휴 기업 리스트를 전달드립니다. 조건이 맞는</div>
                        <div>기업에게는 희망할 시 이메일이 발송됩니다.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepTwo;
