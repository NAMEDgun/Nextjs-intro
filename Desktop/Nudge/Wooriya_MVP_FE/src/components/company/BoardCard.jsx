import React from "react";
import styles from "@/app/styles/organizationBoard.module.css";

const BoardCard = ({
    affiliateForm,
    detail,
    affiliatePeriod,
    recruitmentPeriod,
    photos,
}) => {
    return (
        <div className={`${styles.boardContainer} `}>
            <div className={styles.mlmt2}>
                <div className={`${styles.blackFont}`}>기업소개</div>
                <div
                    className={`${styles.blackFont} ${styles.mt2} ${styles.ml1}`}
                >
                    Story
                    <div className={styles.pletter}>
                        예시 정보 입니다. 우리야는 민정근이 설립하였습니다.
                    </div>
                    <div className={styles.pletter}>
                        <br /> - 예시 정보 입니다. 예시를 들어주세요 <br />-
                        예시 정보 입니다. 예시를 들어주세요 <br />- 예시 정보
                        입니다. 예시를 들어주세요
                    </div>
                    <div className={styles.pletter}>
                        <br />
                        예시 정보를 주시면 해당 웹 페이지를 구현해드리겠습니다.
                    </div>
                </div>
                <div className={styles.grayLine} />
                <div className={`${styles.blackFont} ${styles.mt2} `}>
                    제휴 제안 내용
                </div>
                <div className={`${styles.mdblack} ${styles.mt2}`}>
                    제휴 제안 형태
                </div>
                <span className={`${styles.pletter}`}>{affiliateForm}</span>
                <div className={`${styles.mdblack} ${styles.mt2}`}>
                    제휴 제안 상세 내용
                </div>

                <div className={`${styles.pletter}`}>{detail}</div>
                <div className={styles.grayLine} />
                <div className={`${styles.blackFont} ${styles.mt2}`}>
                    제휴 기간
                </div>
                <div className={`${styles.mdblack} ${styles.mt2}`}>
                    제휴 협약 기간
                </div>
                <span className={`${styles.pletter}`}>{affiliatePeriod}</span>
                <div className={`${styles.mdblack} ${styles.mt2}`}>
                    모집 기간
                </div>
                <div className={`${styles.pletter}`}>{recruitmentPeriod}</div>
                <div className={styles.grayLine} />
                <div className={`${styles.blackFont} ${styles.mt2}`}>
                    관련 이미지
                </div>
                <div className={`${styles.blackFont} ${styles.mt2}`}>
                    {photos &&
                        photos.map((photo, index) => (
                            <img
                                key={index}
                                src={photo}
                                alt={`제휴 제안 이미지 ${index + 1}`}
                                className={styles.proposalImage}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default BoardCard;

// import React from "react";
// import styles from "@/app/styles/organizationBoard.module.css";

// const BoardCard = () => {
//     return (
//         <div className={`${styles.boardContainer} `}>
//             <div className={styles.mlmt2}>
//                 <div className={`${styles.blackFont}`}>기업소개</div>
//                 <div
//                     className={`${styles.blackFont} ${styles.mt2} ${styles.ml1}`}
//                 >
//                     Story
//                     <div className={styles.pletter}>
//                         수원 최대 규모, 최고의 강사진이 있는 실내
//                         클라이밍입니다. 실내 클라이밍 경험이 있는 고객님 1일
//                         이용 <br />- 20,000원 1개월 이용 - 130,000원 3개월 이용
//                         - 330,000원 암벽화 대여 - 3,000원(1일), 20,000원(1개월)
//                     </div>
//                     <div className={styles.pletter}>
//                         <br /> 체험강습 - 25,000원 준비시간이 있으니 5~10분 전
//                         도착해주세요. <br />- 초등학생은 평일 18시, 주말
//                         14시까지만 이용가능합니다. <br />- 미취학 아동은 입장할
//                         수 없습니다.
//                     </div>
//                     <div className={styles.pletter}>
//                         <br />
//                         대학교/학생단체/기업과의 제휴를 통해 저렴한 가격으로
//                         클라이밍을 체험할 수 있도록 도와드리겠습니다.
//                     </div>
//                 </div>
//                 <div className={styles.grayLine} />
//                 <div className={`${styles.blackFont} ${styles.mt2} `}>
//                     제휴 제안 내용
//                 </div>
//                 <div className={`${styles.mdblack} ${styles.mt2}`}>
//                     제휴 제안 형태
//                 </div>
//                 <span className={`${styles.pletter}`}>제품/서비스 할일</span>
//                 <div className={`${styles.mdblack} ${styles.mt2}`}>
//                     제휴 제안 상세 내용
//                 </div>

//                 <div className={`${styles.pletter}`}>
//                     대학/학생단체 - 기본 이용료 20% 할인 및 강습료 30% 할인{" "}
//                     <br /> 기업 - 기본 이용료 15%할인 및 강습료 20% 할인 <br />{" "}
//                     <div className={styles.ssmgray}>
//                         {" "}
//                         *처음 방문하시는 분들에게는 1회 무료 강습 제공
//                     </div>
//                 </div>
//                 <div className={styles.grayLine} />
//                 <div className={`${styles.blackFont} ${styles.mt2}`}>
//                     제휴 협약 조건
//                 </div>
//                 <div className={`${styles.mdblack} ${styles.mt2}`}>
//                     제휴 제안 형태
//                 </div>
//                 <span className={`${styles.pletter}`}>제품/서비스 할일</span>
//                 <div className={`${styles.mdblack} ${styles.mt2}`}>
//                     제휴 제안 상세 내용
//                 </div>
//                 <div className={`${styles.pletter}`}>
//                     대학/학생단체 - 기본 이용료 20% 할인 및 강습료 30% 할인{" "}
//                     <br /> 기업 - 기본 이용료 15%할인 및 강습료 20% 할인 <br />{" "}
//                     <div className={styles.ssmgray}>
//                         {" "}
//                         *처음 방문하시는 분들에게는 1회 무료 강습 제공
//                     </div>
//                 </div>
//                 <div className={styles.grayLine} />
//             </div>
//         </div>
//     );
// };

// export default BoardCard;
