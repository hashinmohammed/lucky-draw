import React from 'react'
import FirstPrize from './FirstPrize';
import Congratulation from './Congratulation';
import styles from './Header.module.css'
const Header = ({count}) => {
  return (
<div className={styles.header}>
       <Congratulation />
        {count >= 40 && (
          <FirstPrize />
        )}
      </div>
  )
}

export default Header