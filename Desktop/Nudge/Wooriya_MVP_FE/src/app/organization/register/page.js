"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/Imgeuploader";
import FirstAgreement from "@/components/register/pages/FirstAgreement";
import FourthRepresent from "@/components/register/pages/FourthRepresent";
import SecondClassification from "@/components/register/pages/SecondClassification";
import ThirdBasicData from "@/components/register/pages/ThirdBasicData";
import styles from "@/app/styles/register.module.css";
import { postOrganizationJoin } from "@/apis/auth/join/organization";

export default function Register() {
    const [currentPage, setCurrentPage] = useState("FirstAgreement");
    const [images, setImages] = useState([]);
    const router = useRouter();

    // 보낼 정보들
    const [selectedClassification, setSelectedClassification] = useState("");
    const [selectedSize, setSelectedSize] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [representativeName, setRepresentativeName] = useState("");
    const [representativeContact, setRepresentativeContact] = useState("");
    const [representativeEmail, setRepresentativeEmail] = useState("");
    const [greetings, setGreetings] = useState("");

    const hanleNextButton = async () => {
        await handleImageUpload();
        const response = await postOrganizationJoin(
            selectedClassification,
            selectedSize,
            email,
            password,
            organizationName,
            representativeName,
            representativeContact,
            representativeEmail,
            greetings
        );
        if (response) {
            alert("회원가입이 완료 되었습니다.");
            router.push("/");
        } else {
            alert("문제가 발생했습니다. 회원가입을 다시 진행해주세요.");
        }
    };
    const handleGreetingChange = (e) => {
        setGreetings(e.target.value);
    };

    const hanleBeforeButton = () => {
        setCurrentPage("FourthRepresent");
    };

    const updateClassification = (content) => {
        setSelectedClassification((prev) =>
            prev === content ? null : content
        );
    };

    const updateSelectedSize = (content) => {
        setSelectedSize((prev) => (prev === content ? null : content));
    };

    const uploadImage = async (imageData, filename, folderName) => {
        try {
            const base64Response = await fetch(imageData);
            const blob = await base64Response.blob();

            const formData = new FormData();
            formData.append("file", blob, filename);
            formData.append("id", id);
            formData.append("folder", folderName);
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Image upload failed");
            }

            console.log(response.message);
        } catch (error) {
            console.error(error);
        }
    };

    const handleImageUpload = async () => {
        try {
            const promises = images.map(async (image, index) => {
                const filename = `image${index}.jpg`;
                await uploadImage(image, filename, "board");
            });

            await Promise.all(promises);

            console.log("All images uploaded successfully");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.comment}>
                    일상 속 우리만의 혜택을 만나볼 수 있는 👀
                </div>
                <div className={styles.logo}>
                    <img src="/img/logo.svg" />
                </div>
                <a>단체 회원가입</a>
                {currentPage === "FirstAgreement" && (
                    <FirstAgreement setCurrentPage={setCurrentPage} />
                )}
                {currentPage === "SecondClassification" && (
                    <SecondClassification
                        setCurrentPage={setCurrentPage}
                        selectedClassification={selectedClassification}
                        selectedSize={selectedSize}
                        updateClassification={updateClassification}
                        updateSelectedSize={updateSelectedSize}
                    />
                )}
                {currentPage === "ThirdBasicData" && (
                    <ThirdBasicData
                        setCurrentPage={setCurrentPage}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                    />
                )}
                {currentPage === "FourthRepresent" && (
                    <FourthRepresent
                        setCurrentPage={setCurrentPage}
                        organizationName={organizationName}
                        setOrganizationName={setOrganizationName}
                        representativeName={representativeName}
                        setRepresentativeName={setRepresentativeName}
                        representativeContact={representativeContact}
                        setRepresentativeContact={setRepresentativeContact}
                        representativeEmail={representativeEmail}
                        setRepresentativeEmail={setRepresentativeEmail}
                    />
                )}
                {currentPage === "FifthGreeting" && (
                    <>
                        <div className={styles.terms}>
                            <h3 className={styles.middletitle}>
                                단체 추가 정보 입력
                            </h3>
                            <div className={styles.additional}>
                                <ImageUploader
                                    images={images}
                                    setImages={setImages}
                                    maxImageCount={1}
                                />
                                <input
                                    className={styles.styledinput}
                                    style={{ height: "7.5rem" }}
                                    type="text"
                                    id="greeting"
                                    value={greetings}
                                    onChange={handleGreetingChange}
                                    placeholder="인사말을 작성해주세요"
                                />
                            </div>
                            <div
                                className={styles.twoButton}
                                style={{ marginTop: "12rem" }}
                            >
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
                                    가입하기
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
