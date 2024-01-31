"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/styles/register.module.css";
import { postEmailSend, postEmailVerify } from "@/apis/auth/join/confirm";
import ClipLoader from "react-spinners/ClipLoader";

const FourthRepresent = ({
    setCurrentPage,
    organizationName,
    setOrganizationName,
    representativeName,
    setRepresentativeName,
    representativeContact,
    setRepresentativeContact,
    representativeEmail,
    setRepresentativeEmail,
}) => {
    const [authenticationNumber, setAuthenticationNumber] = useState("");
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleOrganizationNameChange = (e) => {
        setOrganizationName(e.target.value);
    };

    const handleRepresentativeNameChange = (e) => {
        setRepresentativeName(e.target.value);
    };

    const handleRepresentativeContactChange = (e) => {
        setRepresentativeContact(e.target.value);
    };

    const handleRepresentativeEmailChange = (e) => {
        setRepresentativeEmail(e.target.value);
    };

    const handleAuthenticationNumberChange = (e) => {
        setAuthenticationNumber(e.target.value);
    };

    const hanleNextButton = () => {
        if (isEmailVerified) {
            setCurrentPage("FifthGreeting");
        } else {
            alert("이메일 인증을 해주세요.");
        }
    };

    const hanleBeforeButton = () => {
        setCurrentPage("ThirdBasicData");
    };

    const handleEmailSend = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await postEmailSend(representativeEmail);

            if (response) {
                alert("이메일을 보냈습니다.");
            } else {
                alert("이메일을 보내는 도중에 실패했습니다.");
            }
        } catch (error) {
            console.error("Error during email sending:", error);
            alert("이메일을 보내는 도중에 실패했습니다.");
        } finally {
            setLoading(false);
        }
    };

    const handleEmailVerify = async (e) => {
        e.preventDefault();
        try {
            const response = await postEmailVerify(
                representativeEmail,
                authenticationNumber
            );

            if (response) {
                alert("이메일 인증이 완료되었습니다.");
                setIsEmailVerified(true);
            } else {
                alert("이메일 인증에 실패했습니다.");
                setIsEmailVerified(false);
            }
        } catch (error) {
            console.error("Error during email verification:", error);
            alert("이메일 인증에 실패했습니다.");
            setIsEmailVerified(false);
        }
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
                <h3 className={styles.middletitle}>단체 필수 정보 입력</h3>
                <form>
                    <label
                        className={styles.styledlabel}
                        htmlFor="organizationName"
                    >
                        단체명*
                    </label>
                    <input
                        className={styles.styledinput}
                        type="organizationName"
                        id="organizationName"
                        value={organizationName}
                        onChange={handleOrganizationNameChange}
                        placeholder="단체명을 입력하세요"
                    />
                    <label
                        className={styles.styledlabel}
                        htmlFor="NameOfRepresentative"
                    >
                        대표자명*
                    </label>
                    <input
                        className={styles.styledinput}
                        type="NameOfRepresentative"
                        id="NameOfRepresentative"
                        value={representativeName}
                        onChange={handleRepresentativeNameChange}
                        placeholder="대표자명을 입력하세요"
                    />
                    <label
                        className={styles.styledlabel}
                        htmlFor="RepresentativeContact"
                    >
                        대표자 연락처*
                    </label>
                    <input
                        className={styles.styledinput}
                        type="RepresentativeContact"
                        id="emRepresentativeContactail"
                        value={representativeContact}
                        onChange={handleRepresentativeContactChange}
                        placeholder="대표자 연락처를 입력하세요"
                    />

                    <label className={styles.styledlabel} htmlFor="email">
                        단체 대표 이메일*
                    </label>
                    <div className={styles.flexRow}>
                    <input
                        className={styles.littlestyledinput}
                        type="email"
                        id="email"
                        value={representativeEmail}
                        onChange={handleRepresentativeEmailChange}
                        placeholder="단체 대표 이메일을 입력하세요"
                    />
                    {loading ? (
                        <div className="spinner-container" style={{ display: 'inline', width: '3vw'}}>
                            <ClipLoader
                                color="#267dff"
                                loading={loading}
                                size={20}
                            />
                        </div>
                    ) : (
                        <button
                            className={styles.littleGrayButton}
                            onClick={handleEmailSend}
                        >
                            인증
                        </button>
                    )}
                    </div>

                    <label
                        className={styles.styledlabel}
                        htmlFor="AuthenticationNumber"
                    >
                        인증번호*
                    </label>

                    <input
                        className={styles.littlestyledinput}
                        StyledInput
                        type="AuthenticationNumber"
                        id="AuthenticationNumber"
                        value={authenticationNumber}
                        onChange={handleAuthenticationNumberChange}
                        placeholder="인증번호를 입력하세요"
                    />
                    <button
                        className={styles.littleGrayButton}
                        onClick={handleEmailVerify}
                    >
                        확인
                    </button>

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
                </form>
            </div>
        </>
    );
};

export default FourthRepresent;
