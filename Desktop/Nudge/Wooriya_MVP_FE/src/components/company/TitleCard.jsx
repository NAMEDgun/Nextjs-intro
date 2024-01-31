import React from "react";
import styles from "@/app/styles/organizationBoard.module.css";

const TitleCard = ({ title, author }) => {
    return (
        <div className={`${styles.boardContainer} ${styles.titleSize} `}>
            <div className={`${styles.blackFont} ${styles.mlmt2}`}>{title}</div>
            <div className={styles.mlmt3}>
                <div>{author}</div>
                <img src="/img/logo.svg" alt="예시 데이터" />
            </div>
        </div>
    );
};

export default TitleCard;
