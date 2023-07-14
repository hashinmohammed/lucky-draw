import React, { useState, useEffect, useRef } from "react";
import styles from "./App.module.css";
import cardImage_1 from "./assets/1.png";
import cardImage_2 from "./assets/2.png";
import cardImage_3 from "./assets/3.png";
import cardImage_4 from "./assets/4.png";
import cardImage_5 from "./assets/5.png";
import cardImage_6 from "./assets/6.png";

import SpinButton from "./components/SpinButton";
import BottomPanel from "./components/BottomPanel";
import LotteryWeel from "./components/LotteryWeel";
import Header from "./components/Header";
import Popper from "./components/Popper";

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
  const [isPopperVisible, setIsPopperVisible] = useState(false);
  const intervalRef = useRef(null);

  const handleButtonClick = () => {
    if (!intervalRef.current) {
      setIsButtonDisabled(true);
      intervalRef.current = setInterval(() => {
        setCardImages((prevCardImages) => {
          return prevCardImages.map((cardImage) => {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            const updatedImage = {
              ...cardImage,
              src: cardImage.src.replace(/\d+/, randomNumber),
            };
            return updatedImage;
          });
        });

        setCount((prevCount) => prevCount + 1);
      }, intervalDuration);
    }
  };

  useEffect(() => {
    if (count === 25) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCardImages((prevCardImages) => {
          return prevCardImages.map((cardImage) => {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            const updatedImage = {
              ...cardImage,
              src: cardImage.src.replace(/\d+/, randomNumber),
            };
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
            const updatedImage = {
              ...cardImage,
              src: cardImage.src.replace(/\d+/, randomNumber),
            };
            return updatedImage;
          });
        });

        setCount((prevCount) => prevCount + 1);
      }, 300);
    }

    if (count === 40) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsButtonDisabled(true);
      setIsPopperVisible(true);
    }
  }, [count]);

  return (
    <div className={styles.app}>
      <Popper isPopperVisible={isPopperVisible} />
      <Header count={count} />
      <LotteryWeel cardImages={cardImages} />
      <BottomPanel />
      <SpinButton
        isButtonDisabled={isButtonDisabled}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default App;
