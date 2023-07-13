import React, { useState } from 'react';
import styles from './App.module.css';
import cardImage_1 from './assets/1.png';
import cardImage_2 from './assets/2.png';
import cardImage_3 from './assets/3.png';
import cardImage_4 from './assets/4.png';
import cardImage_5 from './assets/5.png';
import cardImage_6 from './assets/6.png';

import bottomImage from '../public/base.png';
import hoverImage from '../public/btn-1.png';

const App = () => {
  const [cardImages, setCardImages] = useState([
    cardImage_1,
    cardImage_2,
    cardImage_3,
    cardImage_4,
    cardImage_5,
    cardImage_6,
  ]);

  const handleButtonClick = () => {
    const updatedImages = cardImages.map((cardImage) => {
      
      const randomNumber = Math.floor(Math.random() * 9) + 1;
      return cardImage.replace(/\d+/, randomNumber);
    });

    setCardImages(updatedImages);
  };

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <img src="../public/congratulation.png" alt="" />
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          {cardImages.map((cardImage, index) => (
            <div className={styles.card} key={index}>
              <img
                src={cardImage}
                alt=""
                className={styles.cardImage}
              />
            </div>
          ))}
        </div>
      </div>
      <img src={bottomImage} alt="" className={styles.bottomImage} /> 
      <div className={styles.hoverImageContainer}>
        <img
        className='spin-btn'
          onClick={handleButtonClick}
          src={hoverImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default App;
