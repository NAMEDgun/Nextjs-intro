"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/login.module.css";
import { useLogin } from "@/hooks/useLogin";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [stayLoggedIn, setStayLoggedIn] = useState(false);

    const router = useRouter();
    const { mutate } = useLogin();

    const handleStayLoggedInChange = (e) => {
        setStayLoggedIn(e.target.checked);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        mutate({ email, password });
    };

    const handleSignUp = () => {
        router.push("register");
    };

    return (
        <>
            <div className={styles.container}>
                <img src="/img/logo.svg" className={styles.logo} />
                <form onSubmit={handleLoginSubmit}>
                    <div className={styles.signin}>이메일</div>
                    <input
                        className={styles.input}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="  이메일을 입력하세요"
                    />
                    <div className={styles.signin}>비밀번호</div>
                    <input
                        className={styles.input}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="  비밀번호를 입력하세요"
                    />
                    <button
                        type="submit"
                        onClick={handleLoginSubmit}
                        className={styles.loginbutton}
                    >
                        로그인
                    </button>
                </form>
                <label style={{ marginTop: "1.12rem" }}>
                    <input
                        type="checkbox"
                        checked={stayLoggedIn}
                        onChange={handleStayLoggedInChange}
                    />
                    <a className={styles.maintain}>로그인 상태 유지</a>
                </label>
                <div className={styles.socialLoginContainer}>
                    <button
                        type="button"
                        className={styles.socialButton}
                        style={{ backgroundColor: "#ffeb00" }}
                    >
                        카카오톡으로 로그인하기
                    </button>
                    <button
                        type="button"
                        className={styles.socialButton}
                        style={{ border: "0.1rem solid #EBEBEB" }}
                    >
                        Google ID로 로그인하기
                    </button>
                </div>
                <button
                    className={styles.underlineButton}
                    onClick={handleSignUp}
                >
                    단체 회원가입
                </button>
            </div>
        </>
    );
}
