import React, { useState } from 'react';
import styles from "@/app/styles/register.module.css";

// 자식 컴포넌트
const PRForm = ({ promotionMethods, setPromotionMethods }) => {
  const addPromotionMethod = () => {
    setPromotionMethods([...promotionMethods, '']);
  };

  const handlePromotionMethodChange = (index, event) => {
    const newPromotionMethods = promotionMethods.map((method, methodIndex) => {
      if (index !== methodIndex) return method;
      return event.target.value;
    });
    setPromotionMethods(newPromotionMethods);
  };

  const getIconForLink = (link) => {
    if (link.includes('youtube')) {
      return '../../img/youtube-icon.png';
    }
    if (link.includes('band')) {
      return '../../img/band-icon.svg'; 
    }
    if (link.includes('insta')) {
      return '../../img/insta-icon.webp';
    }
    return '../../img/default-icon.png'; // 기본 아이콘 이미지 경로
  };

  return (
    <div>
      <div className={styles.promotetitle}>
        <div className={`${styles.middletitle} ${styles.mt1}`}>홍보 가능 수단</div>
        <button onClick={addPromotionMethod} className={`${styles.mt1} ${styles.smallblue}`}>+ 홍보수단 추가하기</button>
      </div>
      {promotionMethods.map((method, index) => (
        <div className={styles.fleximg}>
          <button onClick={() => window.open(method, '_blank')}>
            <img src={getIconForLink(method)} alt="Platform Icon" />
          </button>
          <input
            className={`${styles.styledinput} ${styles.mt1}`}
            key={index}
            type="text"
            value={method}
            onChange={event => handlePromotionMethodChange(index, event)}
            placeholder='링크를 삽입해주세요.(유튜브, 밴드, 인스타그램 등)'
            />
        </div>
      ))}
    </div>
  );
};


export default PRForm;
