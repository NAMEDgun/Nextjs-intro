import React, { useState, useEffect } from "react";
import {
    getUserNotification,
    postUserNotificationById,
} from "@/apis/user/notification";
import styles from "@/app/styles/modal/alarmmodal.module.css";
import { useRouter } from "next/navigation";

const AlarmModal = ({ onClose }) => {
    const [notifications, setNotifications] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const data = await getUserNotification();
                setNotifications(data);
            } catch (error) {
                console.error("알림 데이터를 불러오는 중 오류 발생:", error);
            }
        };

        fetchNotifications();
    }, []);

    const hanleClose = () => {
        onClose();
    };

    const navigate = async (postId) => {
        try {
            await postUserNotificationById(postId);
            hanleClose();
            router.push(`/organization/${postId}`);
        } catch (error) {
            console.error("알림 읽음 처리 중 오류 발생:", error);
        }
    };

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <img
                    src="/img/ico_x.svg"
                    className={styles.closeButton}
                    onClick={hanleClose}
                ></img>
                <div className={styles.alarmtitle}>
                    <div>제휴 알림</div>
                </div>
                {notifications.map((notification, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(notification.proposal.postId)}
                        className={styles.alarmcontainer}
                    >
                        <div className={styles.alarmcontent}>
                            <div className={styles.alsubtitle}>
                                {notification.proposal.companyEmail}
                            </div>
                            <div className={styles.alsubcon}>
                                {notification.message}
                            </div>
                            <div className={styles.alarmtime}>
                                {new Date(
                                    notification.proposal.createdAt
                                ).toLocaleString()}
                            </div>
                        </div>
                    </div>
                ))}
                {/* <img
                    src="/img/blueAirplane.svg"
                    className={styles.airplaneIcon}
                ></img>
                <div className={styles.offerForm}>
                    해당 기업에게
                    <br />
                    제휴 제안 요청을 하시겠습니까?
                </div>
                <div className={styles.childrenForm}>
                    요청 시 기업에게 알림과 함께 우리 단체의 프로필이
                    전송됩니다.
                </div>
                {isLoading ? (
                    <div style={{ marginTop: "5rem" }}>
                        <ClipLoader
                            color="#267dff"
                            loading={isLoading}
                            size={60}
                        />
                    </div>
                ) : (
                    <form onSubmit={onHandleSubmit}>
                        <input
                            className={styles.messageInput}
                            type="text"
                            value={message}
                            onChange={handleInputChange}
                            placeholder="해당 기업에게 남길 메시지가 있으신가요?"
                        />
                        <div className={styles.buttonGroup}>
                            <button
                                type="button"
                                className={styles.backButton}
                                onClick={onClose}
                            >
                                돌아가기
                            </button>
                            <button type="submit" className={styles.sendButton}>
                                제휴 제안 보내기
                            </button>
                        </div>
                    </form>
                )} */}
            </div>
        </div>
    );
};

export default AlarmModal;
