"use client";
import React from "react";
import { useRouter } from "next/navigation";
import OfferCard from "@/components/OfferCard";
import styles from "@/app/styles/offerCard.module.css";


export default function BenefitsOffer() {
    const router = useRouter();
    const handleOragan = () => {
        router.push("/organization/1");
    };
    return (
        <div>
            <div className={styles.banner}>
                <a>원하는 혜택이 없으신가요? <br/>
                원하는 혜택을 제공하는 제휴처를 만나보세요!</a>
                <img src="/img/offer_banner.svg"/>
                <button>혜택 글 작성하기</button>
            </div>
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
    );
}
