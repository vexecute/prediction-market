import React, { useState } from 'react';
import './market.css';
import logoImage from './logo.png';

const Card: React.FC = () => {
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

    <span className="date-text">Creation Date: Jul 15, 2023</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="date-text">Expires Jul 24, 2023</span>
    <div className="content">
      Will Zuckerberg knockout Elon in the cage fight?
    <div className="about">
      About <br/>
      <p className="para">
      This market is about the highly anticipated cage fight between Mark Zuckerberg and Elon Musk. Scheduled for September 15, 2023, 
      it will be an exciting showdown between the tech titans.<br/><br/> The market will resolve to "Yes" if Mark Zuckerberg knocks out Elon Musk 
      during the fight. A knockout is defined as rendering the opponent unable to continue the match. If Zuckerberg successfully achieves this,
      the market will resolve to "Yes". If Elon Musk withstands Zuckerberg's attacks and avoids a knockout, the market will resolve to "No".
      </p>
    <div className="edgecase">
      Edge Cases <br/>
      <p className="para1">
        1. What if Elon Musk is replaced by a different opponent before the cage fight?<br/>
        2. What if Zuckerberg is unable to participate in the cage fight due to injury ?<br/>
        3. What if Elon, is deemed medically unfit to compete in the cage fight before the scheduled event?
      </p>
    <div className="market-id">
        <span>Market Id:</span> 13
    </div>
    <div className="con">
        Contract Address: 0x78605df79524164911c144801f41e9811b7db73d
    </div>
    <div className="res">
        Resolver Address: 0xf977814e90da44bfa03b6295a0616a897441acec
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

export default Card;
