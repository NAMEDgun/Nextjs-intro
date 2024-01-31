"use client";
import React, { useEffect, useState } from "react";
import { useUserStore } from "@/store/authStore";
import {
    getProposalReceive,
    postProposalSelect,
    getProposalSend,
} from "@/apis/user/proposal";
import styles from "@/app/styles/manage.module.css";
import { useRouter } from "next/navigation";

const page = () => {
    const [Receiveproposals, setReceiveProposals] = useState([]);
    const [Sendproposals, setSendproposals] = useState([]);
    const email = useUserStore((state) => state.email);
    const accessToken = useUserStore((state) => state.accessToken);
    const [viewType, setViewType] = useState("received");

    const router = useRouter();

    useEffect(() => {
        // if (!accessToken) {
        //     alert("로그인이 필요한 페이지입니다. 로그인 페이지로 이동합니다.");
        //     router.push("/organization/login");
        //     return;
        // }

        const fetchData = async () => {
            try {
                const proposalData = await getProposalReceive();
                setReceiveProposals(proposalData);
            } catch (error) {
                console.error("데이터를 불러오는 데 실패했습니다:", error);
                // 오류 처리에 따라 필요한 경우 상태를 조정할 수 있습니다.
            }
        };

        const fetchSendData = async () => {
            try {
                const proposalData = await getProposalSend();
                setSendproposals(proposalData);
            } catch (error) {
                console.error("데이터를 불러오는 데 실패했습니다:", error);
                // 오류 처리에 따라 필요한 경우 상태를 조정할 수 있습니다.
            }
        };

        fetchData();
        fetchSendData();
    }, []);

    const handleSelect = async (id, select) => {
        try {
            await postProposalSelect(id, select);
            setReceiveProposals((currentProposals) =>
                currentProposals.filter((proposal) => proposal.id !== id)
            );
            if (select) {
                alert("승인 메일을 성공적으로 전송했습니다!");
            } else {
                alert("거절 메일을 성공적으로 전송했습니다!");
            }
        } catch (error) {
            console.error("제안 선택 처리 중 오류 발생:", error);
        }
    };

    const handleViewTypeChange = (type) => {
        setViewType(type);
    };

    return (
        <div>
            <div className={styles.information}>
                <button
                    className={
                        viewType === "received"
                            ? styles.activeButton
                            : styles.inactiveButton
                    }
                    onClick={() => handleViewTypeChange("received")}
                >
                    내가 받은 제안
                </button>
                <button
                    className={
                        viewType === "sent"
                            ? styles.activeButton
                            : styles.inactiveButton
                    }
                    onClick={() => handleViewTypeChange("sent")}
                >
                    내가 보낸 제안
                </button>
            </div>
            <div className={styles.bigbox}>
                <div className={styles.waiting}>
                    {viewType === "received" ? (
                        <>
                            <div className={styles.basictitle}>
                                <span>응답 대기 중인 제안</span>
                                <div
                                    className={styles.basicshowing}
                                >{`${Receiveproposals.length}건`}</div>
                            </div>

                            {Receiveproposals.map((proposal) => (
                                <div className={styles.basiccontent}>
                                    <div className={styles.basicinfo}>
                                        <a>일시</a>
                                        <a>상태</a>
                                        <a>기업명</a>
                                        <a>선택</a>
                                    </div>
                                    <div className={styles.basicsta}>
                                        <a className={styles.infocontent}>
                                            {new Date(
                                                proposal.updatedAt
                                            ).toLocaleDateString("ko-KR", {
                                                year: "numeric",
                                                month: "2-digit",
                                                day: "2-digit",
                                            })}
                                            <br />
                                            {new Date(
                                                proposal.updatedAt
                                            ).toLocaleTimeString("ko-KR", {
                                                hour: "numeric",
                                                minute: "2-digit",
                                                hour12: true,
                                            })}
                                        </a>
                                        <button className={styles.infosta}>
                                            ● 제휴 제안
                                        </button>
                                        <a className={styles.infocontent}>
                                            {proposal.companyName}
                                        </a>
                                        <div className={styles.infotype}>
                                            <span>{proposal.message}</span>
                                            <button className={styles.detailed}>
                                                제안 자세히 보기↗
                                            </button>
                                        </div>
                                        <div className={styles.infoselect}>
                                            <button
                                                onClick={() =>
                                                    handleSelect(
                                                        proposal.id,
                                                        true
                                                    )
                                                }
                                                className={styles.aprrove}
                                            >
                                                ● 승인
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleSelect(
                                                        proposal.id,
                                                        false
                                                    )
                                                }
                                                className={styles.reject}
                                            >
                                                ● 거절
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            {" "}
                            <div className={styles.basictitle}>
                                <span>응답 대기 중인 제안</span>
                                <div
                                    className={styles.basicshowing}
                                >{`${Sendproposals.length}건`}</div>
                            </div>
                            {Sendproposals.map((proposal) => (
                                <div className={styles.basiccontent}>
                                    <div className={styles.basicinfo}>
                                        <a>일시</a>
                                        <a>상태</a>
                                        <a>기업명</a>
                                        <a>선택</a>
                                    </div>
                                    <div className={styles.basicsta}>
                                        <a className={styles.infocontent}>
                                            {new Date(
                                                proposal.updatedAt
                                            ).toLocaleDateString("ko-KR", {
                                                year: "numeric",
                                                month: "2-digit",
                                                day: "2-digit",
                                            })}
                                            <br />
                                            {new Date(
                                                proposal.updatedAt
                                            ).toLocaleTimeString("ko-KR", {
                                                hour: "numeric",
                                                minute: "2-digit",
                                                hour12: true,
                                            })}
                                        </a>
                                        <button className={styles.infosta}>
                                            ● 제휴 제안
                                        </button>
                                        <a className={styles.infocontent}>
                                            {proposal.companyName}
                                        </a>
                                        <div className={styles.infotype}>
                                            <span>{proposal.message}</span>
                                            <button className={styles.detailed}>
                                                제안 자세히 보기↗
                                            </button>
                                        </div>
                                        <div className={styles.infoselect}>
                                            <button
                                                onClick={() =>
                                                    handleSelect(
                                                        proposal.id,
                                                        true
                                                    )
                                                }
                                                className={styles.aprrove}
                                            >
                                                ● 승인
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleSelect(
                                                        proposal.id,
                                                        false
                                                    )
                                                }
                                                className={styles.reject}
                                            >
                                                ● 거절
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default page;
