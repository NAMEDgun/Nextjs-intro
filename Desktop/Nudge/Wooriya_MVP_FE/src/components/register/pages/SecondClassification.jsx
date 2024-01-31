import React, { useEffect } from "react";
import styles from "@/app/styles/register.module.css";
import SelectionRectangle from "@/components/SelectionRectangle";

const SecondClassification = ({
    setCurrentPage,
    selectedClassification,
    selectedSize,
    updateClassification,
    updateSelectedSize,
}) => {
    const GroupClassification = [
        "대학교/학생",
        "기업(법인)",
        "비영리법인",
        "동아리/동호회",
        "기타 공식 단체",
        "기타 비공식 단체",
    ];

    const SizeOfGroup = [
        "10명 이상",
        "50명 이상",
        "100명 이상",
        "500명 이상",
        "1,000명 이상",
        "5,000명 이상",
    ];

    const hanleNextButton = () => {
        setCurrentPage("ThirdBasicData");
    };

    const hanleBeforeButton = () => {
        setCurrentPage("FirstAgreement");
    };

    const handleEnterPress = (event) => {
        if (event.key === "Enter") {
            hanleNextButton();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleEnterPress);

        return () => {
            window.removeEventListener("keydown", handleEnterPress);
        };
    }, []);

    useEffect(() => {
        const handleBackButtonEvent = (e) => {
            e.preventDefault();
            hanleBeforeButton();
        };

        window.addEventListener("popstate", handleBackButtonEvent);

        return () => {
            window.removeEventListener("popstate", handleBackButtonEvent);
        };
    }, []);

    return (
        <>
            <div className={styles.terms}>
                <h3 className={styles.middletitle}>단체 분류 선택</h3>
                <span>해당하는 단체 분류를 선택해주세요.</span>
                <div className={styles.filter}>
                    {GroupClassification.map((classification) => (
                        <SelectionRectangle
                            key={classification}
                            content={classification}
                            isSelected={
                                selectedClassification === classification
                            }
                            onClick={updateClassification}
                        />
                    ))}
                </div>
                <h3
                    className={styles.middletitle}
                    style={{ marginTop: "3rem" }}
                >
                    단체 규모
                </h3>
                <span>해당하는 단체 규모를 선택해주세요.</span>
                <div className={styles.filter}>
                    {SizeOfGroup.map((size) => (
                        <SelectionRectangle
                            key={size}
                            content={size}
                            isSelected={selectedSize === size}
                            onClick={updateSelectedSize}
                        />
                    ))}
                </div>
                <div className={styles.twoButton}>
                    <button
                        onClick={hanleBeforeButton}
                        className={styles.GrayButton}
                    >
                        이전
                    </button>
                    <button
                        onClick={hanleNextButton}
                        className={styles.BlueButton}
                    >
                        다음
                    </button>
                </div>
            </div>
        </>
    );
};

export default SecondClassification;
