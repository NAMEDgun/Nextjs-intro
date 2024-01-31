"use client";
import React, { useState } from "react";
import BlueButton from "../../register/BlueButton";

const SelectResponsibilityModal = () => {
    const [selectedResponsibility, setSelectedResponsibility] = useState("");

    const handleResponsibilityChange = (event) => {
        setSelectedResponsibility(event.target.value);
    };

    return (
        <div>
            <div>
                실무자 추가/변경
                <div>
                    <label>
                        <input
                            type="radio"
                            name="responsibility"
                            value="responsibility1"
                            checked={
                                selectedResponsibility === "responsibility1"
                            }
                            onChange={handleResponsibilityChange}
                        />
                        실무자
                        <span>010-1234-4567</span>
                        <span>wooriya@naver.com</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="responsibility"
                            value="responsibility2"
                            checked={
                                selectedResponsibility === "responsibility2"
                            }
                            onChange={handleResponsibilityChange}
                        />
                        실무자
                        <span>010-1234-4567</span>
                        <span>wooriya@naver.com</span>
                    </label>
                </div>
                <button>돌아가기</button>
                <BlueButton>변경하기</BlueButton>
            </div>
        </div>
    );
};

export default SelectResponsibilityModal;
