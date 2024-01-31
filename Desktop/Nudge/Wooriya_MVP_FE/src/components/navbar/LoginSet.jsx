import React, { useState } from "react";
import StyledLoginButton from "./NavButton";
import AlarmModal from "@/components/modal/AlarmModal";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/authStore";

const LoginSet = () => {
    const router = useRouter();
    const [currentModal, setCurrentModal] = useState("");
    const { email, accessToken, logout } = useUserStore();

    const handleLogin = () => {
        router.push("/organization/login");
    };

    const handleOpenModal = () => {
        setCurrentModal("AlarmModal");
    };

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    const handleRegister = () => {
        router.push("/organization/register");
    };

    const handleCloseModal = () => {
        setCurrentModal("");
    };

    const handleMypage = () => {
        router.push("/organization/mypage");
    };
    return (
        <>
            {email ? (
                <>
                    <img
                        src="/img/alarm2.svg"
                        onClick={handleOpenModal}
                        style={{
                            width: "2.2vw",
                            height: "2.2vw",
                            cursor: "pointer",
                            marginLeft: "0.5vw",
                        }}
                    />
                    {currentModal === "AlarmModal" && (
                        <AlarmModal
                            setCurrentModal={setCurrentModal}
                            onClose={handleCloseModal}
                        />
                    )}
                    <div onClick={handleMypage}>{email}</div>
                    <StyledLoginButton onClick={handleLogout}>
                        로그아웃
                    </StyledLoginButton>
                </>
            ) : (
                <>
                    <StyledLoginButton onClick={handleLogin}>
                        로그인
                    </StyledLoginButton>
                    <StyledLoginButton
                        onClick={handleRegister}
                        style={{ color: "#267DFF" }}
                    >
                        회원가입하고 혜택받기
                    </StyledLoginButton>
                </>
            )}
        </>
    );
};

export default LoginSet;
