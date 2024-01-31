"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/styles/register.module.css";
import {
    TermsOfUse,
    PersonalInformationAgreement,
    Caution,
} from "@/app/utils/RegisterTextContents";

const ScrollableTextComponent = ({ textKey }) => {
    let textContent = "";
    if (textKey === "TermsOfUse") {
        textContent = TermsOfUse;
    } else if (textKey === "PersonalInformationAgreement") {
        textContent = PersonalInformationAgreement;
    } else if (textKey === "Caution") {
        textContent = Caution;
    }
    return <div className={styles.ScrollableTextArea}>{textContent}</div>;
};

const FirstAgreement = ({ setCurrentPage }) => {
    const [allChecked, setAllChecked] = useState(false);
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    });

    const handleAllChecked = (event) => {
        const checked = event.target.checked;
        setAllChecked(checked);
        setCheckboxes({
            checkbox1: checked,
            checkbox2: checked,
            checkbox3: checked,
        });
    };

    const handleSingleCheck = (event) => {
        const { name, checked } = event.target;
        setCheckboxes((prev) => {
            const updatedCheckboxes = { ...prev, [name]: checked };
            const allChecked = Object.values(updatedCheckboxes).every(Boolean);
            setAllChecked(allChecked);
            return updatedCheckboxes;
        });
    };

    const hanleNextButton = () => {
        if (allChecked) {
            setCurrentPage("SecondClassification");
        } else {
            alert("모든 약관에 동의해야 다음 단계로 진행할 수 있습니다.");
        }
    };

    useEffect(() => {
        const handleEnterPress = (event) => {
            if (event.key === "Enter") {
                hanleNextButton();
            }
        };

        window.addEventListener("keydown", handleEnterPress);

        return () => {
            window.removeEventListener("keydown", handleEnterPress);
        };
    }, [allChecked]);

    return (
        <>
            <div className={styles.terms}>
                <label
                    style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        lineHeight: "1.5rem",
                        letterSpacing: "-0.1rem",
                    }}
                >
                    <input
                        type="checkbox"
                        checked={allChecked}
                        onChange={handleAllChecked}
                    />
                    이용약관, 개인정보 수집 및 이용동의에 모두 동의합니다
                </label>
                <hr className={styles.GrayLine} />
                <label>
                    <input
                        type="checkbox"
                        name="checkbox1"
                        checked={checkboxes.checkbox1}
                        onChange={handleSingleCheck}
                    />
                    우리야(Wooriya) 이용약관 동의
                </label>
                <ScrollableTextComponent textKey="TermsOfUse" />
                <label>
                    <input
                        type="checkbox"
                        name="checkbox2"
                        checked={checkboxes.checkbox2}
                        onChange={handleSingleCheck}
                    />
                    개인정보 수집 및 이용 동의
                </label>
                <ScrollableTextComponent textKey="PersonalInformationAgreement" />
                <label>
                    <input
                        type="checkbox"
                        name="checkbox3"
                        checked={checkboxes.checkbox3}
                        onChange={handleSingleCheck}
                    />
                    단체 회원 이용 시 주의사항에 대한 동의
                </label>
                <ScrollableTextComponent textKey="Caution" />
                <button onClick={hanleNextButton} className={styles.BlueButton}>
                    다음
                </button>
            </div>
        </>
    );
};

export default FirstAgreement;
