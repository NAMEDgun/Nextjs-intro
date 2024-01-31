"use client"
import React, { useState } from "react";
import styles from "@/app/styles/manage.module.css";


const manage = () => {
    const [offerSentTime, setOfferSentTime] = useState("");
    const [currentModal, setCurrentModal] = useState("");

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


    return (
        <div>this is the join history page</div>
    );
};

export default manage;

