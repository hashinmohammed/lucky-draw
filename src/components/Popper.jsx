import React from 'react';
import './Popper.css';
const wrapperStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };


const Popper = ({isPopperVisible}) => {
 
  const renderConfetti = () => {
    const confetti = [];
    for (let i = 0; i <= 400; i++) {
      confetti.push(<div key={`confetti-${i}`} className={`confetti-${i}`}></div>);
    }
    return confetti;
  };

  const renderCoins = () => {
    const coins = [];
    for (let i = 0; i <= 30; i++) {
      coins.push(<div key={`coin-${i}`} className={`coin-${i}`}></div>);
    }
    return coins;
  };

  const renderDollars = () => {
    const dollars = [];
    for (let i = 50; i >= 0; i--) {
      dollars.push(<div key={`dollar-${i}`} className={`dollar-${i}`}></div>);
    }
    return dollars;
  };

  return isPopperVisible? (
   
   <div style={wrapperStyle}>
     <div className="confettiHerePlease dollarDollarBillYall moreMoneyMoreProblems">
      {renderDollars()}
      {renderCoins()}
      {renderConfetti()}
    </div>
   </div>
  ):null;
};

export default Popper;
