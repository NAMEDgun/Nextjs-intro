import React, { useState, useEffect } from "react";
import styles from "@/app/styles/register.module.css";

const ThirdBasicData = ({
    setCurrentPage,
    email,
    setEmail,
    password,
    setPassword,
}) => {
    const isValidPassword = (password) => {
        const regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        return regex.test(password);
    };

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const [emailError, setEmailError] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordCheckError, setPasswordCheckError] = useState("");

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        if (!isValidPassword(newPassword)) {
            setPasswordError(
                "8~16자 영문 대/소문자, 숫자, 특수문자를 사용하세요."
            );
        } else {
            setPasswordError("");
        }
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (!isValidEmail(newEmail)) {
            setEmailError("올바른 이메일 형식이 아닙니다.");
        } else {
            setEmailError("");
        }
    };

    const handleCheckPasswordChange = (e) => {
        const newCheckPassword = e.target.value;
        setCheckPassword(newCheckPassword);
    };

    const hanleNextButton = (e) => {
        e && e.preventDefault();
        if (password && password === checkPassword && isValidEmail(email)) {
            setCurrentPage("FourthRepresent");
        }
        if (password !== checkPassword) {
            setPasswordCheckError("비밀번호가 일치하지 않습니다.");
        }
    };

    const hanleBeforeButton = (e) => {
        e.preventDefault();
        setCurrentPage("SecondClassification");
    };

    const handleEnterPress = (event) => {
        if (event.key === "Enter") {
            hanleNextButton(event);
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
                <h3 className={styles.middletitle}>단체 아이디/비밀번호</h3>
                <form>
                    <label className={styles.styledlabel} htmlFor="email">
                        단체 이메일*
                    </label>
                    <input
                        className={styles.styledinput}
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="이메일을 입력하세요"
                    />
                    {emailError && (
                        <div style={{ color: "red" }}>{emailError}</div>
                    )}
                    <label
                        className={styles.styledlabel}
                        htmlFor="password"
                        style={{}}
                    >
                        단체 비밀번호*
                    </label>
                    <input
                        className={styles.styledinput}
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="비밀번호를 입력하세요"
                    />
                    {passwordError && (
                        <div style={{ color: "red" }}>{passwordError}</div>
                    )}

                    <label className={styles.styledlabel} htmlFor="password">
                        단체 비밀번호 확인*
                    </label>
                    <input
                        className={styles.styledinput}
                        type="password"
                        id="password"
                        value={checkPassword}
                        onChange={handleCheckPasswordChange}
                        placeholder="비밀번호를 입력하세요"
                    />
                    {passwordCheckError && (
                        <div style={{ color: "red" }}>{passwordCheckError}</div>
                    )}

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

export default ThirdBasicData;
