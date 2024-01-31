"use client";
import React from "react";
import styles from "@/app/styles/mainbanner.module.css";
import { useRouter } from "next/navigation";

const MainBanner = () => {
    const router = useRouter();
    const handleRouter = () => {
        router.push("/organization/free/post");
    };
    return (
        <div className={styles.container}>
            <div className={styles.comment}>
                <a>우리에게만 제공하는 특별 할인과 제휴 혜택</a>
                <a>일상 속 우리에게 필요한</a>
                <a>혜택을 무료로 만나보세요!</a>
                <button onClick={handleRouter}>지금 바로 혜택 받기</button>
            </div>
            <div className={styles.benefitimg}>
                <img src="/img/main_banner.svg" className={styles.picture} />
            </div>
        </div>
    );
};

export default MainBanner;
