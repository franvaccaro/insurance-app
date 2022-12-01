import React from 'react';
import './styles/claims.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import claims1 from '../assets/icons/Claims_1.svg';
import claims2 from '../assets/icons/Claims_2.svg';
import claims3 from '../assets/icons/Claims_3.svg';
import claims4 from '../assets/icons/Claims_4.svg';
import step1 from '../assets/icons/Steps_1.svg';
import step2 from '../assets/icons/Steps_2.svg';
import step3 from '../assets/icons/Steps_3.svg';
import FadeInRight from './fades/FadeInRight';
import FadeInSection from './fades/FadeInSection';

const Claims: React.FC = () => {
  const mobile = useMediaQuery('(max-width:650px)');

  return (
    <section className="claims">
      <FadeInSection extClass="claimsCardList">
        <div className="claimsCard">
          <img src={claims1} width="60" height="61" alt="" />
          <h2>Easy Claim System</h2>
          <p>Express your desires and needs to us</p>
        </div>
        <div className="claimsCard">
          <img src={claims2} width="61" height="61" alt="" />
          <h2>Easy Installments</h2>
          <p>Less complicated payment system</p>
        </div>
        <div className="claimsCard">
          <img src={claims3} width="61" height="61" alt="" />
          <h2>24x7 Support</h2>
          <p>You are our most important priority</p>
        </div>
        <div className="claimsCard">
          <img src={claims4} width="57" height="57" alt="" />
          <h2>Strongly Secured</h2>
          <p>We can secure your precious assets</p>
        </div>
      </FadeInSection>
      <div className="claimsBanner" id="claims">
        <FadeInRight extClass="claimsData">
          <div className="claimsTitle">
            <h2>CLAIMS</h2>
            <div className="claimsDivider" />
          </div>
          <p>
            Proper claims handling is a vital component of any insurance organization—and
            <b>{' K&K Insurance '}</b>
            is known for the exceptional service that our in-house Claims
            Department.
          </p>
        </FadeInRight>
        <FadeInRight extClass="claimsData">
          <div className="claimsTitle">
            <h2>
              AGENT EXPERIENCE
            </h2>
            <div className="claimsDivider" />
          </div>
          <p id="steps">
            Our experienced representatives understand the daily issues that
            impact sports, leisure and entertainment organizations.
          </p>
        </FadeInRight>
      </div>
      <FadeInSection extClass="steps-Section">
        <div className="stepsTitle">
          <h2>GET INSURED IN 3 STEPS!</h2>
          <div className="stepsDivider" />
        </div>
        <div className="stepsList">
          <div className="stepsItem">
            <img
              src={step1}
              alt=""
              width={mobile ? '32' : '80'}
              height={mobile ? '32' : '80'}
            />
            Enter your personal information
          </div>
          <div className="stepsItem">
            <img
              src={step2}
              alt=""
              width={mobile ? '32' : '80'}
              height={mobile ? '32' : '80'}
            />
            Choose your category
          </div>
          <div className="stepsItem">
            <img
              src={step3}
              alt=""
              width={mobile ? '32' : '80'}
              height={mobile ? '32' : '80'}
            />
            Select your plan and get insured
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Claims;
