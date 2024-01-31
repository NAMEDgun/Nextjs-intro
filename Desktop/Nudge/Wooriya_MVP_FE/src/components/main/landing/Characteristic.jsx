import React from 'react'
import styles from "@/app/styles/characteristic.module.css"

const Characteristic = () => {
  return (
    <div className={styles.container}>
      <a>불필요한 시간, 기회, 비용을 낭비하고 있지 않으신가요?</a>
      <label>우리야는 제휴 과정의 편리함을 제공해요!</label>
      <div className={styles.character}>
        <div>
          <div className={styles.charbox}>
            <img src="/img/char1.svg" className={styles.char1}/>
          </div>
          <span>명확한 홍보 요청</span>
          <a>불필요한 제품/서비스 홍보 요청을 개선</a>
        </div>
        <div>
          <div className={styles.charbox}>
            <img src="/img/char2.svg"/>
          </div>
          <span>제한적인 혜택 관리</span>
          <a>구성원들이 실질적으로 체감하지 못하는 제한적인 혜택 관리</a>
        </div>
        <div>
          <div className={styles.charbox}>
            <img src="/img/char3.svg" className={styles.char3}/>
          </div>
          <span>편리한 혜택 관리</span> 
          <a>원하는 제휴 혜택을 찾기 위한 검색, 제안서 작성 등을 편리하게</a>
        </div>
      </div>
    </div>
  )
}

export default Characteristic