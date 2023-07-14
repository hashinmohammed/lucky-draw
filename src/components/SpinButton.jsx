import React from 'react'
import hoverImage from '../../public/btn-1.png';
import styles from './SpinButton.module.css'
const SpinButton = ({isButtonDisabled,handleButtonClick}) => {
  return (
    <div className={styles.hoverImageContainer}>
    <button
      className={`spin-btn ${isButtonDisabled ? styles.disabledButton : ''}`}
      onClick={handleButtonClick}
      disabled={isButtonDisabled}
      style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
    >
      <img
        src={hoverImage}
        alt=""
        style={{ width: '100%', height: '100%',animation:isButtonDisabled && 'none', filter: isButtonDisabled ? 'grayscale(100%)' : 'none' }}
      />
    </button>
  </div>
  )
}

export default SpinButton