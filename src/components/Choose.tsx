import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import './styles/choose.css';
import CardList from './CardList';
import arrowbtn from '../assets/icons/Arrow_Btn.svg';

const Choose: React.FC = () => {
  const mobile = useMediaQuery('(max-width:650px)');

  return (
    <section className="choose" id="choose">
      <div className="chooseContainer">
        <div className="chooseTitle">
          <h2>CHOOSE YOUR INSURANCE</h2>
          <div className="chooseDivider" />
        </div>
        {
          mobile
            ? (
              <p>
                Check our programs, designed for non-sports activities.
                Coverage provided includes important liability protection for the organization.
              </p>
            )
            : (
              <p>
                <b>{'K&K '}</b>
                has different programs, designed for youth or adult non-sports activities.
                Coverage provided includes important liability protection for the organization,
                including its employees and volunteers.
              </p>
            )
        }
        <CardList />
        <a href="/" className="chooseViewAll">
          {'View all '}
          {
            !mobile
            && <img src={arrowbtn} alt="" />
          }
        </a>
      </div>
    </section>
  );
};

export default Choose;
