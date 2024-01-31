"use client";
import React, { useState, useEffect } from "react";
import BoardCard from "@/components/company/BoardCard";
import JoinSituation from "@/components/company/join/JoinSituation";
import TitleCard from "@/components/company/TitleCard";
import styles from "@/app/styles/organizationBoard.module.css";
import OfferModal from "@/components/modal/OfferModal";
import CompleteModal from "@/components/modal/CompleteModal";
import { useParams } from "next/navigation";
import { getProposalBoardById } from "@/apis/proposal-post/post";
import {
    reverseOneMapAffiliateKind,
    reverseMapAffiliateForm,
    reverseMapAffiliatePeriod,
} from "@/utils/OrganizationMapping";

const organizationBoard = () => {
    const [offerSentTime, setOfferSentTime] = useState("");
    const [currentModal, setCurrentModal] = useState("");
    const [boardData, setBoardData] = useState({});
    const [loading, setLoading] = useState(true);

    const { ID } = useParams();

    useEffect(() => {
        const fetchBoardData = async () => {
            setLoading(true);
            try {
                const data = await getProposalBoardById(ID);
                setBoardData(data);
            } catch (error) {
                console.error(
                    `게시물 데이터를 가져오는 중 오류 발생: ${error}`
                );
            } finally {
                setLoading(false);
            }
        };

        fetchBoardData();
    }, [ID]);

    const handleSendOffer = () => {
        const now = new Date();

        const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, "0");
        const day = now.getDate().toString().padStart(2, "0");
        const weekDay = weekDays[now.getDay()];
        const hour = now.getHours();
        const minute = now.getMinutes().toString().padStart(2, "0");
        const ampm = hour >= 12 ? "오후" : "오전";

        const formattedHour = (hour > 12 ? hour - 12 : hour)
            .toString()
            .padStart(2, "0");

        const formattedTime = `${year}. ${month}. ${day}일 (${weekDay}) ${ampm} ${formattedHour}시 ${minute}분`;

        setOfferSentTime(formattedTime);
    };

    const handleOpenModal = () => {
        setCurrentModal("OfferModal");
    };

    const handleCloseModal = () => {
        setCurrentModal("");
    };

    return (
        <div className={styles.flexRow}>
            <div className={styles.columnGap}>
                <TitleCard title={boardData.title} author={boardData.author} />
                <BoardCard
                    affiliateForm={reverseMapAffiliateForm(
                        boardData.affiliateForm
                    )}
                    detail={boardData.detail}
                    affiliatePeriod={reverseMapAffiliatePeriod(
                        boardData.affiliatePeriod
                    )}
                    recruitmentPeriod={boardData.recruitmentPeriod}
                    photos={boardData.photos}
                />
            </div>
            <div>
                <div className={styles.endOfjc}>
                    <div className={styles.likebutton}>
                        <img src="/img/ico_heart.svg"></img>
                        <div>좋아요</div>
                    </div>
                </div>
                <div
                    className={`${styles.boardContainer} ${styles.columnMoreGap} ${styles.boardSmallSize}`}
                >
                    <div className={`${styles.flexRowGap}`}>
                        <div>
                            <div className={styles.smblack}>업종 </div>
                            <div className={styles.smgray}>
                                {reverseOneMapAffiliateKind(
                                    boardData.affiliateKinds
                                )}
                            </div>
                        </div>
                        <div>
                            <div className={styles.smblack}>업력 </div>
                            <div className={styles.smgray}>
                                신규 업체(1년 미만)
                            </div>
                        </div>
                        <div>
                            <div className={styles.smblack}>지역 </div>
                            <div className={styles.smgray}>
                                경기도 수원시 팔달구
                            </div>
                        </div>
                    </div>
                    <div className={styles.gap1}>
                        <button className={styles.SkyBlueButton}>
                            실시간 채팅하기
                        </button>
                        <button
                            className={styles.BlueButton}
                            onClick={handleOpenModal}
                        >
                            제휴 제안하기
                        </button>
                    </div>

                    {currentModal === "OfferModal" && (
                        <OfferModal
                            setCurrentModal={setCurrentModal}
                            handleSendOffer={handleSendOffer}
                            onClose={handleCloseModal}
                        />
                    )}
                    {currentModal === "CompleteModal" && (
                        <CompleteModal
                            offerSentTime={offerSentTime}
                            onClose={handleCloseModal}
                        />
                    )}
                </div>
                <div className={styles.mt1}>
                    <JoinSituation />
                </div>
            </div>
        </div>
    );
};

export default organizationBoard;

// "use client";
// import React, { useState } from "react";
// import BoardCard from "@/components/company/BoardCard";
// import JoinSituation from "@/components/company/join/JoinSituation";
// import TitleCard from "@/components/company/TitleCard";
// import styles from "@/app/styles/organizationBoard.module.css";
// import OfferModal from "@/components/modal/OfferModal";
// import CompleteModal from "@/components/modal/CompleteModal";

// const organizationBoard = () => {
//     const [offerSentTime, setOfferSentTime] = useState("");
//     const [currentModal, setCurrentModal] = useState("");

//     const handleSendOffer = () => {
//         const now = new Date();

//         const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
//         const year = now.getFullYear();
//         const month = (now.getMonth() + 1).toString().padStart(2, "0");
//         const day = now.getDate().toString().padStart(2, "0");
//         const weekDay = weekDays[now.getDay()];
//         const hour = now.getHours();
//         const minute = now.getMinutes().toString().padStart(2, "0");
//         const ampm = hour >= 12 ? "오후" : "오전";

//         const formattedHour = (hour > 12 ? hour - 12 : hour)
//             .toString()
//             .padStart(2, "0");

//         const formattedTime = `${year}. ${month}. ${day}일 (${weekDay}) ${ampm} ${formattedHour}시 ${minute}분`;

//         setOfferSentTime(formattedTime);
//     };

//     const handleOpenModal = () => {
//         setCurrentModal("OfferModal");
//     };

//     const handleCloseModal = () => {
//         setCurrentModal("");
//     };

//     return (
//         <div className={styles.flexRow}>
//             <div className={styles.columnGap}>
//                 <TitleCard />
//                 <BoardCard />
//             </div>
//             <div>
//                 <div className={styles.endOfjc}>
//                     <div className={styles.likebutton}>
//                         <img src="/img/ico_heart.svg"></img>
//                         <div>좋아요</div>
//                     </div>
//                 </div>
//                 <div
//                     className={`${styles.boardContainer} ${styles.columnMoreGap} ${styles.boardSmallSize}`}
//                 >
//                     <div className={`${styles.flexRowGap}`}>
//                         <div>
//                             <div className={styles.smblack}>업종 </div>
//                             <div className={styles.smgray}>스포츠/레저</div>
//                         </div>
//                         <div>
//                             <div className={styles.smblack}>업력 </div>
//                             <div className={styles.smgray}>
//                                 신규 업체(1년 미만)
//                             </div>
//                         </div>
//                         <div>
//                             <div className={styles.smblack}>지역 </div>
//                             <div className={styles.smgray}>
//                                 경기도 수원시 팔달구
//                             </div>
//                         </div>
//                     </div>
//                     <div className={styles.gap1} >
//                         <button className={styles.SkyBlueButton}>
//                             실시간 채팅하기
//                         </button>
//                         <button
//                             className={styles.BlueButton}
//                             onClick={handleOpenModal}
//                         >
//                             제휴 제안하기
//                         </button>
//                     </div>

//                     {currentModal === "OfferModal" && (
//                         <OfferModal
//                             setCurrentModal={setCurrentModal}
//                             handleSendOffer={handleSendOffer}
//                             onClose={handleCloseModal}
//                         />
//                     )}
//                     {currentModal === "CompleteModal" && (
//                         <CompleteModal
//                             offerSentTime={offerSentTime}
//                             onClose={handleCloseModal}
//                         />
//                     )}
//                 </div>
//                 <div className={styles.mt1}>
//                     <JoinSituation />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default organizationBoard;
