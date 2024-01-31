import React from "react";
import styles from "@/app/styles/offerCard.module.css";

const OfferCard = ({
    onClick,
    provider,
    title,
    description,
    status,
    classification,
    personnel,
    bookMark,
    liked,
}) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <img src="/img/offercard_ajou.svg"/>
            <div className={styles.container}>
            <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{provider}</h2>
                <span className={styles.cardStatus}>{status}</span>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.cardBody}>
                    <p>{title}</p>
                    <p className={styles.cardDescription}>{description}</p>
                    <div className={styles.Category}>
                        <span className={styles.sports}>스포츠/레저</span>
                        <span className={styles.culture}>문화/예술</span>
                        <span className={styles.education}>교육</span>
                    </div>
                </div>
                <div className={styles.information}>
                    <div className={styles.type}>
                        <div className={styles.typebox}>
                            <span>단체 분류</span>
                            <label>{classification}</label>
                        </div>
                        <div className={styles.typebox}>
                            <span>단체 인원</span>
                            <label>{personnel}</label>
                        </div>
                    </div>
                    <div className={styles.toggle}>
                        <div className={styles.togglebox}>
                            <img src="/img/ico_bookmark.svg"/>
                            <button>북마크</button>
                            <span>{bookMark}</span>
                        </div>
                        <div className={styles.togglebox}>
                            <img src="/img/ico_heart.svg"/>
                            <button>좋아요</button>
                            <span>{liked}</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OfferCard;
