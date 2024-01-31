import React, { useState } from "react";
import LoginSet from "./LoginSet";
import AlarmModal from "@/components/modal/AlarmModal";
import styles from "@/app/styles/navbar.module.css";
import { useRouter } from "next/navigation";
const Navbar = () => {
    const [currentModal, setCurrentModal] = useState("");
    const router = useRouter();
    const handleSearch = () => {
        router.push("/organization/search");
    };
    const handleOffer = () => {
        router.push("/organization/offer");
    };
    const handleLogoClick = () => {
        router.push("/");
    };
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
        setCurrentModal("AlarmModal");
    };
    const handleCloseModal = () => {
        setCurrentModal("");
    };
    return (
        <div>
            <nav className={styles.navbar}>
                <img
                    src="/img/logo.svg"
                    onClick={handleLogoClick}
                    className={styles.logo}
                    style={{ cursor: "pointer" }}
                />
                <a>모일수록 혜택이 커지는</a>
                <div className={styles.second}>
                    <span
                        onClick={handleSearch}
                        style={{ marginLeft: "0.6vw" }}
                    >
                        혜택 찾아보기
                    </span>
                    <span
                        onClick={handleOffer}
                        style={{ marginRight: "0.6vw" }}
                    >
                        혜택 제안하기
                    </span>
                </div>
                <img
                    src="/img/ico_search.svg"
                    style={{ width: "2vw", height: "2vw", cursor: "pointer" }}
                />
                {/* <img
                    src="/img/alarm.svg"
                    onClick={handleOpenModal}
                    style={{
                        width: "1.2vw",
                        height: "1.2vw",
                        cursor: "pointer",
                        marginLeft: "0.7vw",
                    }}
                /> */}
                {/* <img
                    src="/img/alarm2.svg"
                    onClick={handleOpenModal}
                    style={{
                        width: "2.2vw",
                        height: "2.2vw",
                        cursor: "pointer",
                        marginLeft: "0.5vw",
                    }}
                />
                {currentModal === "AlarmModal" && (
                    <AlarmModal
                        setCurrentModal={setCurrentModal}
                        handleSendOffer={handleSendOffer}
                        onClose={handleCloseModal}
                    />
                )} */}
                <LoginSet />
            </nav>
        </div>
    );
};

export default Navbar;
