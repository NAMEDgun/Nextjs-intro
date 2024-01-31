"use client";
import ImageUploader from "@/components/Imgeuploader";
import SelectionRectangle from "@/components/SelectionRectangle";
import TextareaWithCounter from "@/components/posting/TextareaWithCounter";
import styles from "@/app/styles/register.module.css";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import PRForm from "@/components/posting/PRForm";
import { postProposalBoard } from "@/apis/proposal-post/auth-post";
import {
    mapAffiliateKind,
    mapAffiliateForm,
    mapAffiliatePeriod,
} from "@/utils/OrganizationMapping";

const page = () => {
    const [title, setTitle] = useState("");
    const [affiliateKinds, setAffiliateKinds] = useState([]);
    const [affiliateForm, setAffiliateForm] = useState(null);
    const [affiliatePeriod, setAffiliatePeriod] = useState(null);
    const [EndlineClicked, setEndlineClicked] = useState(null);
    const [promotionMethods, setPromotionMethods] = useState([""]);
    const [Detailtext, setDetailText] = useState("");

    const [images, setImages] = useState([]);
    const router = useRouter();
    const BenefitClassification = [
        "스포츠/레저",
        "의료",
        "미용",
        "교육",
        "기타",
    ];

    const BenefitMethodClassification = [
        "제품/서비스 할인",
        "이익공유",
        "기타",
    ];

    const PeriodClassification = ["협의가능", "1년", "1년이상"];

    const EndlineClassification = ["상시모집", "직접입력"];

    const updateClassification = (content, isClicked) => {
        setAffiliateKinds((prev) => {
            if (isClicked) {
                return prev.includes(content) ? prev : [...prev, content];
            } else {
                return prev.filter((item) => item !== content);
            }
        });
    };

    const updateBenefitMethodClicked = (content) => {
        setAffiliateForm((prev) => (prev === content ? null : content));
    };

    const updatePeriodClicked = (content) => {
        setAffiliatePeriod((prev) => (prev === content ? null : content));
    };

    const updateEndlineClicked = (content) => {
        setEndlineClicked((prev) => (prev === content ? null : content));
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

            const result = await response.json(); // 서버 응답 파싱
            console.log(result.path);
            return result;
        } catch (error) {
            console.error(error);
        }
    };

    const handleImageUpload = async () => {
        const paths = [];
        try {
            const uploadPromises = images.map((image, index) => {
                const filename = `image${index}.jpg`;
                return uploadImage(image, filename, "board");
            });

            const uploadResults = await Promise.all(uploadPromises);
            uploadResults.forEach((result) => {
                if (result.path) {
                    paths.push(result.path);
                }
            });

            console.log("All images uploaded successfully");
        } catch (error) {
            console.error("Image upload failed:", error);
        }
        return paths;
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const uploadedPaths = await handleImageUpload();
            const convertedAffiliateKinds = mapAffiliateKind(affiliateKinds);
            const convertAffiliateForm = mapAffiliateForm(affiliateForm);
            const converAffiliatePeriod = mapAffiliatePeriod(affiliatePeriod);
            const response = await postProposalBoard(
                title,
                convertedAffiliateKinds,
                convertAffiliateForm,
                converAffiliatePeriod,
                EndlineClicked,
                promotionMethods,
                uploadedPaths,
                Detailtext
            );
            if (response) {
                alert("포스팅이 성공적으로 완료되었습니다.");
                router.push("/organization/test/post");
            } else {
                alert("포스팅에 실패했습니다.");
            }
        } catch (error) {
            console.error("포스팅 중 오류가 발생했습니다.", error);
            alert("포스팅 중 오류가 발생했습니다.");
        }
    };

    useEffect(() => {
        console.log(affiliateKinds);
    }, [affiliateKinds]);

    useEffect(() => {
        console.log(affiliateForm);
    }, [affiliateForm]);

    useEffect(() => {
        console.log(affiliatePeriod);
    }, [affiliatePeriod]);

    useEffect(() => {
        console.log(EndlineClicked);
    }, [EndlineClicked]);

    useEffect(() => {
        console.log(Detailtext);
    }, [Detailtext]);

    const id = useParams().ID;
    return (
        <div className={styles.postingcontainer}>
            <div className={styles.postingtitle}>
                <div className={styles.title}>아주대학교의 프로필</div>
                <div className={styles.subtitle}>상세정보를 수정합니다.</div>
            </div>
            <div className={styles.postingcontent}>
                <div className={styles.middletitle}>
                    내가 원하는 혜택/제안명
                </div>
                <input
                    className={`${styles.styledinput} ${styles.mt1}`}
                    style={{ width: "32rem" }}
                    onChange={handleTitleChange}
                    placeholder="제목을 작성하세요. ex)대학생들을 위한 스포츠 업체 제휴처를 찾고 있습니다."
                />
                <div className={`${styles.middletitle} ${styles.mt1}`}>
                    희망 제휴 혜택 분야
                </div>
                <div className={styles.filter}>
                    {BenefitClassification.map((classification) => (
                        <SelectionRectangle
                            key={classification}
                            content={classification}
                            isSelected={affiliateKinds.includes(classification)}
                            updateClassification={updateClassification}
                        />
                    ))}
                </div>
                <div className={`${styles.middletitle} ${styles.mt1}`}>
                    제휴 희망 기간
                </div>
                <div className={styles.filter}>
                    {BenefitMethodClassification.map((classification) => (
                        <SelectionRectangle
                            key={classification}
                            content={classification}
                            isSelected={affiliateForm === classification}
                            onClick={updateBenefitMethodClicked}
                        />
                    ))}
                </div>
                <div className={`${styles.middletitle} ${styles.mt1}`}>
                    제휴 혜택 모집 기간
                </div>
                <div className={styles.filter}>
                    {PeriodClassification.map((classification) => (
                        <SelectionRectangle
                            key={classification}
                            content={classification}
                            isSelected={affiliatePeriod === classification}
                            onClick={updatePeriodClicked}
                        />
                    ))}
                </div>
                <div className={`${styles.middletitle} ${styles.mt1}`}>
                    제휴 혜택 모집 기간
                </div>
                <div className={styles.filter}>
                    {EndlineClassification.map((classification) => (
                        <SelectionRectangle
                            key={classification}
                            content={classification}
                            isSelected={EndlineClicked === classification}
                            onClick={updateEndlineClicked}
                        />
                    ))}
                </div>
                <PRForm
                    promotionMethods={promotionMethods}
                    setPromotionMethods={setPromotionMethods}
                />
                <ImageUploader
                    images={images}
                    setImages={setImages}
                    maxImageCount={4}
                />
                <div className={`${styles.middletitle} ${styles.mt1}`}>
                    <TextareaWithCounter
                        text={Detailtext}
                        setText={setDetailText}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className={`${styles.BlueButton} ${styles.w18}`}
                >
                    원하는 혜택 업로드
                </button>
            </div>
        </div>
    );
};

export default page;
