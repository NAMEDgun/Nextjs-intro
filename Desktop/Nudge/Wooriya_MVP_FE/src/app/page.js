"use client";

import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/authStore";
import InquiryBanner from "../components/main/Banner/InquiryBanner";
import MainBanner from "../components/main/Banner/MainBanner";
import ShortcutsBanner from "../components/main/Banner/ShortcutsBanner";
import OrganizationGroup from "../components/main/OrganizationGroup";
import Characteristic from "../components/main/landing/Characteristic";
import Procedure from "../components/main/landing/Procedure";
import OfferCard from "../components/OfferCard";
import styles from "@/app/styles/organizaitonCard.module.css";

export default function Home() {
    const { email } = useUserStore();
    const router = useRouter();
    const handleOragan = () => {
        router.push("/organization/1");
    };

    return (
        <>
            {email ? (
                <>
                    <MainBanner />
                    <OrganizationGroup />
                    <div
                        className={`${styles.flexColumnContainer} ${styles.smMarginTop}`}
                    >
                        <OfferCard
                            onClick={handleOragan}
                            provider="아주대학교"
                            title="대학생에게 필요한 제휴처를 찾고 있습니다."
                            description="수원 지역에 위치한 대학교이며, 현재 교직원/학생들을 위한 제휴처를 모집하고 있습니다. 최대한 다양한 제휴 혜택을 확보하고자 합니다."
                            status="D-day 11"
                            actionText="Action"
                            classification="대학교/학생단체"
                            personnel="1만명 이상"
                            bookMark="550"
                            liked="880"
                        />
                        <OfferCard
                            onClick={handleOragan}
                            provider="아주대학교"
                            title="대학생에게 필요한 제휴처를 찾고 있습니다."
                            description="수원 지역에 위치한 대학교이며, 현재 교직원/학생들을 위한 제휴처를 모집하고 있습니다. 최대한 다양한 제휴 혜택을 확보하고자 합니다."
                            status="D-day 11"
                            actionText="Action"
                            classification="대학교/학생단체"
                            personnel="1만명 이상"
                            bookMark="550"
                            liked="880"
                        />
                        <OfferCard
                            onClick={handleOragan}
                            provider="아주대학교"
                            title="대학생에게 필요한 제휴처를 찾고 있습니다."
                            description="수원 지역에 위치한 대학교이며, 현재 교직원/학생들을 위한 제휴처를 모집하고 있습니다. 최대한 다양한 제휴 혜택을 확보하고자 합니다."
                            status="D-day 11"
                            actionText="Action"
                            classification="대학교/학생단체"
                            personnel="1만명 이상"
                            bookMark="550"
                            liked="880"
                        />
                    </div>
                    <InquiryBanner />
                </>
            ) : (
                <>
                    <MainBanner />
                    <OrganizationGroup />
                    <ShortcutsBanner />
                    <Characteristic />
                    <Procedure />
                    <InquiryBanner />
                </>
            )}
        </>
    );
}
