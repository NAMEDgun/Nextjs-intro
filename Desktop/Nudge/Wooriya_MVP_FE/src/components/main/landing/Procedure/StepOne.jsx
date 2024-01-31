"use client";
import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import styles from "@/app/styles/main/procedure.module.css";

const ButtonSVG = ({ isActive, number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5vw"
        height="1.5vw"
        viewBox="0 0 20 20"
        fill="none"
    >
        <circle
            cx="9"
            cy="9"
            r="9"
            fill={isActive ? "#FFFFFF" : "#4D5766"}
        />
        <text
            x="50%"
            y="50%"
            dy=".3em" // 세로 중앙 정렬을 위한 조정
            fill={isActive ? "#4D5766" : "#FFFFFF"}
            fontSize="10" // 폰트 크기 조정
            textAnchor="middle" // 가로 중앙 정렬
            fontFamily="Arial, sans-serif" // 폰트 패밀리 설정
        >
            {number}
        </text>
    </svg>
);

const StepOne = () => {
    const [selectedFeature, setSelectedFeature] = useState("purpose"); // 초기값은 'purpose'
    const isActive = (feature) => selectedFeature === feature;

    const handleChangeFeature = (feature) => {
        setSelectedFeature(feature);
    };

    const buttonClass = (feature) =>
        selectedFeature === feature ? styles.activeButton : styles.basicbutton;

    const getImageSrc = (feature) => {
        switch (feature) {
            case "purpose":
                return "/img/main_landing_step1.svg";
            case "affiliation":
                return "/img/main_landing_step2.svg";
            case "region":
                return "/img/main_landing_step3.svg";
            case "feature":
                return "/img/main_landing_step4.svg";
            default:
                return "";
        }
    };

    const transitions = useTransition(selectedFeature, {
        from: { opacity: 0, transform: "translate3d(100%,0,0)" },
        enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
        leave: {
            opacity: 0,
            transform: "translate3d(0,0%,0)",
            display: "none",
        },
    });

    return (
        <div className={styles.container}>
            <label className={styles.biggrayfont}>
                모이면 혜택이 커지는 우리야에서
            </label>
            <label className={styles.bigblackfont}>
                주변 상권 할인부터 <br />
                원하던 혜택까지 만나보세요
            </label>
            <div className={styles.OneContainer}>
                <div className={styles.stepContainer}>
                    <div className={styles.step}>
                        <span className={styles.bluefont}>STEP 01</span>
                        <div className={styles.blackfont}>
                            단체 회원가입 및{" "}
                        </div>
                        <div className={styles.blackfont}>
                            희망 제휴 조건 설정
                        </div>
                        <div className={styles.grayfont}>
                            단체 회원가입 후 원하는 제휴 혜택, 조건을
                            선택합니다.
                        </div>
                        <div className={styles.menu}>
                            <button
                                className={buttonClass("purpose")}
                                onClick={() => handleChangeFeature("purpose")}
                            >
                                <ButtonSVG
                                    isActive={isActive("purpose")}
                                    number="1"
                                />
                                <div>단체 목적</div>
                            </button>
                            <button
                                className={buttonClass("affiliation")}
                                onClick={() =>
                                    handleChangeFeature("affiliation")
                                }
                            >
                                <ButtonSVG
                                    isActive={isActive("affiliation")}
                                    number="2"
                                />
                                <div>제휴 분야</div>
                            </button>
                            <button
                                className={buttonClass("region")}
                                onClick={() => handleChangeFeature("region")}
                            >
                                <ButtonSVG
                                    isActive={isActive("region")}
                                    number="3"
                                />
                                <div>제휴 지역</div>
                            </button>
                            <button
                                className={buttonClass("feature")}
                                onClick={() => handleChangeFeature("feature")}
                            >
                                <ButtonSVG
                                    isActive={isActive("feature")}
                                    number="4"
                                />
                                <div>주요 특징</div>
                            </button>
                        </div>
                    </div>
                    <div
                        className={styles.cardContainer}
                        style={{ overflow: "hidden" }}
                    >
                        {transitions((style, item) => (
                            <animated.img
                                style={style}
                                src={getImageSrc(item)}
                                alt={item}
                                className={styles.slideImage}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepOne;
