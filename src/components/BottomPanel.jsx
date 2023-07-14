import React from 'react'
import bottomImage from '../../public/base.png';
import styles from './BottomPanel.module.css'
const BottomPanel = () => {
  return (
<img src={bottomImage} alt="" className={styles.bottomImage} />
  )
}

export default BottomPanel