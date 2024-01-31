"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/styles/register.module.css";

const SelectionRectangle = ({
    content,
    isSelected,
    onClick,
    updateClassification,
}) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        if (updateClassification) {
            updateClassification(content, isClicked);
        }
    }, [isClicked]);

    const handleClick = () => {
        setIsClicked((current) => !current);
        if (onClick) {
            onClick(content);
        }
    };

    return (
        <button
            className={`${styles.selectionRectangle} ${
                isSelected && styles.isClicked
            }`}
            onClick={handleClick}
        >
            {content}
        </button>
    );
};
export default SelectionRectangle;
