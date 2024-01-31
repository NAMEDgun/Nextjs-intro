import React, { useState } from "react";
import styles from "@/app/styles/modal/offer.module.css";
import { useParams } from "next/navigation";
import { postProposalSend } from "@/apis/proposal-post/auth-post";
import ClipLoader from "react-spinners/ClipLoader";

const OfferModal = ({ setCurrentModal, handleSendOffer, onClose }) => {
    const { ID } = useParams();
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const onHandleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            console.log(ID, message);
            const response = await postProposalSend(ID, message);
            if (response) {
                setCurrentModal("CompleteModal");
                handleSendOffer();
            } else {
                alert(
                    "메일을 보내는 도중 오류가 발생하였습니다. 다시 시도해주세요."
                );
            }
        } catch (error) {
            alert(
                "메일을 보내는 도중 오류가 발생하였습니다. 다시 시도해주세요."
            );
            console.error("제안 보내기 요청 실패:", error);
        } finally {
            setIsLoading(false);
        }
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
                )}
            </div>
        </div>
    );
};

export default OfferModal;
