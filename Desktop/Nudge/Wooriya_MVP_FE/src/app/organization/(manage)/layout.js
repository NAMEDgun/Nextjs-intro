"use client";
import Navbar from "@/components/navbar/Navbar";
import styles from "@/app/styles/manage.module.css";
import { useRouter } from "next/navigation";

export default function OrganizationLayout(props) {
    const router = useRouter();
    const handleProfileUpdatePage = () => {
        router.push("/organization/mypage/profileUpdate");
    };
    return (
        <div style={{ marginTop: "5.5rem" }}>
            <Navbar />
            <div className={styles.abox}>스포츠/레저 | 업체명</div>
            <div className={styles.container}>
                <div className={styles.leftbox}>
                    <div className={styles.profile}>
                        <a>단체 회원</a>
                        <img src="/img/ajoulogo.svg" className={styles.logo} />
                        <a className={styles.title}>아주대학교</a>
                        <img
                            src="/img/certificated.svg"
                            className={styles.badge}
                        />
                        <button onClick={handleProfileUpdatePage}>
                            프로필 수정하기
                        </button>
                    </div>
                    <div className={styles.chat}></div>
                </div>
                <div className={styles.rightbox}>
                    <div className={styles.statusbox}>
                        <div className={styles.status}>
                            <div>
                                <a className={styles.blue}>신규 제안/요청</a>
                                <div className={styles.numberbox}>
                                    <h3>1</h3>
                                    <label>개</label>
                                </div>
                            </div>
                            <div>
                                <a className={styles.red}>제휴 협약 중</a>
                                <div className={styles.numberbox}>
                                    <h3>1</h3>
                                    <label>개</label>
                                </div>
                            </div>
                            <div>
                                <a>제휴 체결 완료</a>
                                <div className={styles.numberbox}>
                                    <h3>1</h3>
                                    <label>개</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={styles.contentbox}
                        style={{
                            height: "51.8125vw",
                            borderRadius: "0.75vw",
                            border: "1px solid #E5E8EB",
                        }}
                    >
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}
