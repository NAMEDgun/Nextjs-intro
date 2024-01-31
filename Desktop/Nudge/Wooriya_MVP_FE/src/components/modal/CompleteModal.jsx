import React from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/modal/completemodal.module.css";

const CompleteModal = ({ offerSentTime, onClose }) => {
    const router = useRouter();

    const hanldeMyPage = () => {
        router.push("/1");
    };
    const hanleClose = () => {
        onClose();
    };
    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <img
                    src="/img/ico_x.svg"
                    className={styles.closeButton}
                    onClick={hanleClose}
                ></img>
                <img
                    src="/img/completemessage.svg"
                    className={styles.completeMessage}
                ></img>
                <div className={styles.offerForm}>
                    제휴 제안이 완료되었습니다.
                </div>
                <div className={styles.childrenForm}>
                    기업이 제휴 제안을 수락/거절 시 알림과 이메일로 알려드릴게요
                </div>
                <div className={styles.completebox}>
                    <div>제휴 제안을 성공적으로 전송했어요!</div>
                    <div>제안 일시: {offerSentTime}</div>
                </div>
                <div className={styles.buttonGroup}>
                    <button className={styles.backButton} onClick={onClose}>
                        돌아가기
                    </button>
                    <button
                        onClick={hanldeMyPage}
                        className={styles.sendButton}
                    >
                        마이페이지
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CompleteModal;
