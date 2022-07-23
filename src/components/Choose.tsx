import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch } from 'react-redux';
import './styles/choose.css';
import CardList from './CardList';
import arrowbtn from '../assets/icons/Arrow_Btn.svg';
import FadeInSection from './fades/FadeInSection';

const Choose: React.FC = () => {
  const mobile = useMediaQuery('(max-width:650px)');
  const dispatch = useDispatch();

  return (
    <section className="choose" id="choose">
      <div className="chooseContainer">
        <FadeInSection extClass="chooseTitle">
          <h2>CHOOSE YOUR INSURANCE</h2>
          <div className="chooseDivider" />
        </FadeInSection>
        <FadeInSection extClass="chooseText">
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
        </FadeInSection>
        <CardList />
        <FadeInSection extClass="chooseViewAll">
          <button
            type="button"
            onClick={() => dispatch({
              type: 'ADD_NOTIFICATION',
              payload: {
                id: Date.now(),
                message: 'This is a prototype.',
              },
            })}
          >
            View all
            {
              !mobile
              && <img src={arrowbtn} alt="" />
            }
          </button>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Choose;
