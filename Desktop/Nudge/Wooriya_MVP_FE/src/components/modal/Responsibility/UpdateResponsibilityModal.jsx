"use client";
import React from "react";

const UpdateResponsibilityModal = () => {
    return (
        <div>
            <form>
                <div>실무자명</div>
                <form>
                    <div>
                        <label>실무자명*</label>
                        <input type="text" placeholder="우리야" required />
                    </div>
                    <div>
                        <label>실무자 연락처*</label>
                        <input
                            type="tel"
                            placeholder="010-9876-5432"
                            required
                        />
                    </div>
                    <div>
                        <label>실무자 이메일*</label>
                        <input
                            type="email"
                            placeholder="wooriya@gmail.com"
                            required
                        />
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" />
                            실무자를 다른표로 등록하시겠습니까?
                        </label>
                    </div>
                    <div>
                        <button type="button" className="button-default">
                            돌아가기
                        </button>
                        <button type="submit" className="button-primary">
                            추가하기
                        </button>
                    </div>
                </form>
            </form>
        </div>
    );
};

export default UpdateResponsibilityModal;
