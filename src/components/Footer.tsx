import React from 'react';
import './styles/footer.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch } from 'react-redux';
import logo from '../assets/icons/Logo_footer.svg';
import email from '../assets/icons/Email.svg';
import phone from '../assets/icons/Phone.svg';
import address from '../assets/icons/Address.svg';
import fb from '../assets/icons/Social_FB.svg';
import tw from '../assets/icons/Social_TW.svg';
import ig from '../assets/icons/Social_IG.svg';
import yt from '../assets/icons/Social_YT.svg';
import linkedin from '../assets/icons/Social_IN.svg';
import FadeInSection from './fades/FadeInSection';

const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const mobile = useMediaQuery('(max-width: 950px)');
  const mobile2 = useMediaQuery('(max-width: 650px)');

  const footerDispatch = () => {
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        id: Date.now(),
        message: 'This App is a prototype for a UX/UI case study made by',
        link: 'https://www.behance.net/bqad',
        linktext: 'Adrián Vaccaro.',
        message2: 'Go check it out! 🚀',
      },
    });
  };

  return (

    <section className="footer" id="footer">
      <div className="footerData">
        <FadeInSection extClass="footerDataLogo">
          <div>
            <input
              type="image"
              src={logo}
              width={mobile2 ? '101' : '297'}
              height={mobile2 ? '16' : '47'}
              alt="logo"
              onClick={() => footerDispatch()}
            />
          </div>
          <p>Dedicated to insuring the world&apos;s fun</p>
        </FadeInSection>
        <FadeInSection extClass="footerDataContact">
          <div className="contactTitle">
            <h2>NEED ASISTANCE?</h2>
            <div className="contactDivider" />
          </div>
          <div className="contactInfoContainer">
            <div className="contactInfoItem">
              <div className="ItemIcon">
                <input
                  type="image"
                  src={email}
                  width={mobile ? '24' : '48'}
                  height={mobile ? '24' : '48'}
                  alt="email"
                  onClick={() => footerDispatch()}
                />
              </div>
              <div className="ItemData">
                {!mobile && <h6>EMAIL</h6>}
                <p>kk.general@kandkinsurance.com</p>
              </div>
            </div>
            <div className="contactInfoItem">
              <div className="ItemIcon">
                <input
                  type="image"
                  src={phone}
                  width={mobile ? '24' : '48'}
                  height={mobile ? '24' : '48'}
                  alt="phone"
                  onClick={() => footerDispatch()}
                />
              </div>
              <div className="ItemData">
                {!mobile && <h6>PHONE</h6>}
                <p>1-800-637-4757</p>
              </div>
            </div>
            <div className="contactInfoItem">
              <div className="ItemIcon">
                <input
                  type="image"
                  src={address}
                  width={mobile ? '24' : '48'}
                  height={mobile ? '24' : '48'}
                  alt="address"
                  onClick={() => footerDispatch()}
                />
              </div>
              <div className="ItemData">
                {!mobile && <h6>ADDRESS</h6>}
                <p>1712 Magnavox Way, Fort Wayne, IN 46804</p>
              </div>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection extClass="footerDataSocial">
          <div className="socialIcons">
            <input
              type="image"
              src={fb}
              width={mobile2 ? '16' : '32'}
              height={mobile2 ? '16' : '32'}
              alt="fb"
              onClick={() => footerDispatch()}
            />
            <input
              type="image"
              src={tw}
              width={mobile2 ? '16' : '32'}
              height={mobile2 ? '16' : '32'}
              alt="tw"
              onClick={() => footerDispatch()}
            />
            <input
              type="image"
              src={ig}
              width={mobile2 ? '16' : '32'}
              height={mobile2 ? '16' : '32'}
              alt="ig"
              onClick={() => footerDispatch()}
            />
            <input
              type="image"
              src={yt}
              width={mobile2 ? '16' : '32'}
              height={mobile2 ? '16' : '32'}
              alt="yt"
              onClick={() => footerDispatch()}
            />
            <input
              type="image"
              src={linkedin}
              width={mobile2 ? '16' : '32'}
              height={mobile2 ? '16' : '32'}
              alt="in"
              onClick={() => footerDispatch()}
            />
          </div>
        </FadeInSection>
      </div>
      <div className="footerCredits">
        <div className="footerCreditsItem">
          <button
            type="button"
            onClick={() => footerDispatch()}
          >
            Credits | Privacy Policy | Terms & Conditions
          </button>
        </div>
        <div className="footerCreditsItem">
          <button
            type="button"
            onClick={() => footerDispatch()}
          >
            Copyright © 2022 K&K Insurance Group Inc.
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
