"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/organizaitonCard.module.css";

const getStatusText = (status) => {
    if (status === -1) {
        return "상시모집";
    } else if (status === 0) {
        return "오늘까지";
    } else {
        return `D-day ${status}`;
    }
};

const OrganizationCard = ({ imgPath, tags, title, specs, status, id }) => {
    //const statusText = getStatusText(status);
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/organization/${id}`);
    };

    return (
        <div onClick={handleCardClick}>
            <img
                src={imgPath}
                alt={title}
                style={{
                    height: "12vw",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                }}
            />
            <div style={{ paddingTop: "0.75vw" }}>
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        style={{
                            fontWeight: "bold",
                            fontSize: "0.75vw",
                            backgroundColor: "rgba(94, 172, 104, 0.10)",
                            padding: "0.2vw 0.5vw",
                            borderRadius: "4px",
                            color: "#5EAC68",
                            border: "1px solid rgba(94, 172, 104, 0.50)",
                        }}
                    >
                        {tag}
                    </span>
                ))}
                <div className={`${styles.SmallBlack} `}>{title}</div>
                <div>
                    {specs.map((spec, index) => (
                        <>
                            <span key={index} className={styles.specsfont}>
                                {spec}
                            </span>
                            <span
                                key={index}
                                style={{
                                    marginTop: "0.5vw",
                                    marginRight: "0.4vw",
                                    fontSize: "0.8125vw",
                                }}
                            >
                                {index < specs.length - 1 && "·"}
                            </span>
                        </>
                    ))}
                </div>
                <div className={styles.statusText}>{status}</div>
            </div>
        </div>
    );
};

export default OrganizationCard;
