"use client";
import React, { useState, useEffect } from "react";

import { getProposalBoard } from "@/apis/proposal-post/post";
import styles from "@/app/styles/organizaitonCard.module.css";
import {
    reverseMapAffiliateForm,
    reverseMapAffiliatePeriod,
    reverseMapAffiliateKind,
} from "@/utils/OrganizationMapping";
import OrganizationCard from "@/components/OraganizationCard";

const Page = () => {
    const [proposals, setProposals] = useState([]);

    useEffect(() => {
        const fetchProposals = async () => {
            try {
                const data = await getProposalBoard();
                setProposals(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching proposal board data:", error);
            }
        };

        fetchProposals();
    }, []);

    return (
        <div className={styles.marginTop}>
            <div className={`${styles.blackfont} ${styles.BigBlack}`}>
                우리가 무료로 받을 수 있는 제휴 혜택
            </div>
            <div
                className={`${styles.flexRowContainer}`}
                style={{
                    margin: "5vw 21vw 7.5vw 21vw",
                    justifyContent: "space-between",
                }}
            >
                {proposals.map((proposal) => (
                    <OrganizationCard
                        key={proposal.id}
                        imgPath={proposal.photos[0]} // photos 배열의 첫 번째 항목을 사용하거나 기본 이미지 경로
                        tags={reverseMapAffiliateKind(proposal.affiliateKinds)}
                        title={proposal.title}
                        // specs 배열은 서버 응답에 맞게 조정해야 합니다. 아래는 예시입니다.
                        specs={[
                            proposal.author,
                            reverseMapAffiliateForm(proposal.affiliateForm),
                            proposal.recruitmentPeriod,
                        ]}
                        // status 값은 제공된 JSON에는 없으므로, 예시를 위해 임의의 값이나 서버로부터 받은 데이터를 사용해야 합니다.
                        status={reverseMapAffiliatePeriod(
                            proposal.affiliatePeriod
                        )}
                        id={proposal.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
