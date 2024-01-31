"use client";
import React from "react";
import styles from "@/app/styles/inquirybanner.module.css";
import { useRouter } from "next/navigation";

const InquiryBanner = () => {
    const router = useRouter();
    const handleRouter = () => {
        router.push("/organization/posting");
    };
    return (
        <div className={styles.container}>
            <img src="/img/inquiry.svg" />
            <div className={styles.comment}>
                <a>원하시는 제휴가 있나요?</a>
                <a>직접 글을 작성해보세요!</a>
            </div>
            <button onClick={handleRouter}>지금 바로 글 작성하기</button>
        </div>
    );
};

export default InquiryBanner;
