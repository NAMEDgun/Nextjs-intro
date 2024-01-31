import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/app/styles/sidebar.module.css";

const categories = [
    { name: "스포츠/레저", path: "/sports" },
    { name: "의료", path: "/medical" },
    { name: "미용", path: "/beauty" },
    { name: "문화/예술", path: "/culture" },
    { name: "생활", path: "/lifestyle" },
    { name: "반려동물", path: "/pets" },
    { name: "음식", path: "/food" },
    { name: "기타", path: "/others" },
];

const Sidebar = () => {
    const [activeCategory, setActiveCategory] = useState("");

    useEffect(() => {}, []);

    return (
        <div className={styles.sidebar}>
            <div className={styles.category}>
            <img src="/img/category.svg"/>
            <h3>카테고리</h3>
            </div>
            {categories.map((category) => (
                
                <Link
                    key={category.name}
                    href={category.path}
                    className={
                        activeCategory === category.name
                            ? styles.activeLink
                            : styles.link
                    }
                >
                    {category.name}
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
