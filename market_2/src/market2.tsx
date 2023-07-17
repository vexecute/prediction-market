import React, { useState } from 'react';
import './market2.css';
import logoImage from './logo.png';

const Card1: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const walletAmount = 1000;

  const handleMintClick = () => {
    setAmount('');
  };

  const handleMaxClick = () => {
    setAmount(walletAmount.toString());
  };

  const [outcomesProposed, setOutcomesProposed] = useState(false);
  const [challengeWindow, setChallengeWindow] = useState(false);
  const [finalResolution, setFinalResolution] = useState(false);

  const navigateToMainPage = () => {
    window.location.href = '/';
  };
  return (      
    <div>
      <div onClick={navigateToMainPage}>
        <img style={{width:"175px",marginLeft:"-1300px",marginTop:"17px"}} src={logoImage} alt="Logo" className="logo-image" />
      </div>
    <div className="date">

    <span className="date-text">Creation Date: Jul 16, 2023</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="date-text">Expires Jul 31, 2023</span>
    <div className="content">
      Will Oppenheimer gross more than Barbie ?
    <div className="about">
      About <br/>
      <p className="para">
      This market focuses on comparing the box office gross between two movies, Oppenheimer and Barbie. It seeks to 
      determine which movie will generate a higher revenue. The market will resolve to "Yes" if Oppenheimer's total 
      box office gross surpasses that of Barbie.<br/><br/> 
      
      If Oppenheimer achieves higher earnings, the market outcome will be "Yes".
      Conversely, if Barbie's box office gross exceeds that of Oppenheimer, the market will resolve to "No".
      </p>
    <div className="edgecase">
      Edge Cases <br/>
      <p className="para1">
        1. What if Barbie and Oppenheimer have identical box office grosses ?<br/>
        2. What if Oppenheimer experiences a significant delay in their release, affecting their revenue potential ?<br/>
        3. What if Barbie receives significant negative publicity or controversy, affecting their box office success?
      </p>
    <div className="market-id">
        <span>Market Id:</span> 44
    </div>
    <div className="con">
        Contract Address: 0x32400084c286cf3e17e7b677ea9583e60a000324
    </div>
    <div className="res">
        Resolver Address: 0xfe01a216234f79cfc3bea7513e457c6a9e50250d
    </div>
    <div className="card">
      <div className="balance">Balance: {walletAmount} ckbtc</div>
      <div className="card-content">
        <input
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder = "Enter no. of tokens"
        />
      </div>
      <button className="mint-button" onClick={handleMintClick}>
        Mint
      </button>
      <button className="max-button" onClick={handleMaxClick}>
        Max
      </button>
      </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Card1;
