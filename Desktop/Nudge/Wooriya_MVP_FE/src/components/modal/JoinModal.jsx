import React from "react";
import BlueButton from "../register/BlueButton";

const JoinModal = () => {
    return (
        <div>
            <div>해당 제휴 제안에 동참하시겠습니까?</div>
            <p>
                제휴 제안에 동참할 경우 제휴 제안 기업에 우리 단체 프로필이
                노출됩니다.이후 기업이 제휴 제안을 보낼 경우 알림 및 이메일로
                알려드립니다.
            </p>
            <button>돌아가기</button>
            <BlueButton>제휴 동참하기</BlueButton>
        </div>
    );
};

export default JoinModal;
