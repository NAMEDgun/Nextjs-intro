import React from "react";
import styles from "@/app/styles/organizationBoard.module.css";

const JoinCard = ({ name, area, personnel, scale }) => {
    return (
        <div className={styles.square}>
            <div className={`${styles.mt1} ${styles.ml1}`}>
                <img className={styles.logo} src="/img/augustClimbing.svg" alt="클라이밍" />
                <div>{name}</div>
                <div
                    className={`${styles.simpleflexColumn} ${styles.ml3} ${styles.mb2}`}
                >
                    <div className={styles.simpleflexRow}>
                        <img className={styles.redDot} src="/img/redDot.svg"></img>
                        <div className={styles.ssmblack}>지역</div>
                    </div>
                    <div className={`${styles.ssmgray} ${styles.ml1}`}>
                        {area}
                    </div>
                </div>
                <div
                    className={`${styles.simpleflexColumn} ${styles.ml3} ${styles.mb2}`}
                >
                    <div className={styles.simpleflexRow}>
                        <img className={styles.redDot} src="/img/redDot.svg"></img>
                        <div className={styles.ssmblack}>인원</div>
                    </div>
                    <div className={`${styles.ssmgray} ${styles.ml1}`}>
                        {personnel}
                    </div>
                </div>
                <div
                    className={`${styles.simpleflexColumn} ${styles.ml3} ${styles.mb2}`}
                >
                    <div className={styles.simpleflexRow}>
                        <img className={styles.redDot} src="/img/redDot.svg"></img>
                        <div className={styles.ssmblack}>규모</div>
                    </div>
                    <div className={`${styles.ssmgray} ${styles.ml1}`}>
                        {scale}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinCard;
