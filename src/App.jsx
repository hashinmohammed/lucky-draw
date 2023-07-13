import React, { useState, useEffect, useRef } from 'react';
import styles from './App.module.css';
import cardImage_1 from './assets/1.png';
import cardImage_2 from './assets/2.png';
import cardImage_3 from './assets/3.png';
import cardImage_4 from './assets/4.png';
import cardImage_5 from './assets/5.png';
import cardImage_6 from './assets/6.png';

import bottomImage from '../public/base.png';
import hoverImage from '../public/btn-1.png';
import congratulationImage from '../public/congratulation.png';

const App = () => {
  const [cardImages, setCardImages] = useState([
    { id: 1, src: cardImage_1 },
    { id: 2, src: cardImage_2 },
    { id: 3, src: cardImage_3 },
    { id: 4, src: cardImage_4 },
    { id: 5, src: cardImage_5 },
    { id: 6, src: cardImage_6 },
  ]);

  const [intervalDuration, setIntervalDuration] = useState(100);
  const [count, setCount] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const intervalRef = useRef(null);

  const handleButtonClick = () => {
    if (!intervalRef.current) {
      setIsButtonDisabled(true);
      intervalRef.current = setInterval(() => {
        setCardImages((prevCardImages) => {
          return prevCardImages.map((cardImage) => {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            const updatedImage = { ...cardImage, src: cardImage.src.replace(/\d+/, randomNumber) };
            return updatedImage;
          });
        });

        setCount((prevCount) => prevCount + 1);
      }, intervalDuration);
    } else {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setCount(0);
    }
  };

  useEffect(() => {
    if (count === 25) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCardImages((prevCardImages) => {
          return prevCardImages.map((cardImage) => {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            const updatedImage = { ...cardImage, src: cardImage.src.replace(/\d+/, randomNumber) };
            return updatedImage;
          });
        });

        setCount((prevCount) => prevCount + 1);
      }, 100);
    }
    if (count === 35) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCardImages((prevCardImages) => {
          return prevCardImages.map((cardImage) => {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            const updatedImage = { ...cardImage, src: cardImage.src.replace(/\d+/, randomNumber) };
            return updatedImage;
          });
        });

        setCount((prevCount) => prevCount + 1);
      }, 300);
    }

    if (count === 40) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [count]);

  useEffect(() => {
    if (count === 40) {
      setIsButtonDisabled(false);
    }
  }, [count]);

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <img src={congratulationImage} alt="" />
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          {cardImages.map((cardImage) => (
            <div className={styles.card} key={cardImage.id}>
              <img
                src={cardImage.src}
                alt=""
                className={styles.cardImage}
              />
            </div>
          ))}
        </div>
      </div>
      <img src={bottomImage} alt="" className={styles.bottomImage} />
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
            style={{ width: '100%', height: '100%', filter: isButtonDisabled ? 'grayscale(100%)' : 'none' }}
          />
        </button>
      </div>
    </div>
  );
};

export default App;
