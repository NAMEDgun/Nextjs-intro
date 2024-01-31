import React from 'react'
import styles from "@/app/styles/shortcutsbanner.module.css"

const ShortcutsBanner = () => {
  return (
    <div className={styles.container}>
      <img src="/img/shortcut.svg"/>
      <div className={styles.comment}>
        <a>단체 회원가입 후 원하는</a>
        <a>혜택을 제공하는 제휴처를 만나보세요!</a>
      </div>
      <button>지금 바로 혜택 받기</button>
    </div>
  )
}

export default ShortcutsBanner