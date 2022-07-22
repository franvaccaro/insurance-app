import React from 'react';
import './styles/card.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import arrowMobile from '../assets/icons/Arrow_Mobile.svg';
import arrow from '../assets/icons/Arrow.svg';

interface CardModel {
  title: string;
  text: string;
  bg: string;
}

const Card: React.FC<CardModel> = ({ title, text, bg }) => {
  const mobile = useMediaQuery('(max-width:650px)');

  return (
    <div className="Card">
      <div className={bg}>
        <div className="Card-filter" />
      </div>
      <div className="Card-data">
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="Card-arrow">
          {
            mobile
              ? <img src={arrowMobile} alt="" />
              : <img src={arrow} alt="" />
          }
        </div>
      </div>
    </div>
  );
};

export default Card;
