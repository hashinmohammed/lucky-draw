import React from 'react'
import styles from './LotteryWeel.module.css'
const LotteryWeel = ({cardImages}) => {
  return (
<div className={styles.cardsContainer}>
        <div className={styles.cards}>
          {cardImages.map((cardImage) => (
            <div className={styles.card} key={cardImage.id}>
              <img src={cardImage.src} alt="" className={styles.cardImage} />
            </div>
          ))}
        </div>
      </div>
  )
}

export default LotteryWeel