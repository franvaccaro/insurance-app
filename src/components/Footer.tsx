import React from 'react';
import './styles/footer.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../assets/icons/Logo_footer.svg';
import logoMobile from '../assets/icons/Logo_footer_mobile.svg';
import email from '../assets/icons/Email.svg';
import emailMobile from '../assets/icons/Email_mobile.svg';
import phone from '../assets/icons/Phone.svg';
import phoneMobile from '../assets/icons/Phone_mobile.svg';
import address from '../assets/icons/Address.svg';
import addressMobile from '../assets/icons/Address_mobile.svg';
import fb from '../assets/icons/Social_FB.svg';
import fbMobile from '../assets/icons/Social_FB_mobile.svg';
import tw from '../assets/icons/Social_TW.svg';
import twMobile from '../assets/icons/Social_TW_mobile.svg';
import ig from '../assets/icons/Social_IG.svg';
import igMobile from '../assets/icons/Social_IG_mobile.svg';
import yt from '../assets/icons/Social_YT.svg';
import ytMobile from '../assets/icons/Social_YT_mobile.svg';
import linkedin from '../assets/icons/Social_IN.svg';
import inMobile from '../assets/icons/Social_IN_mobile.svg';

const Footer: React.FC = () => {
  const mobile = useMediaQuery('(max-width: 950px)');
  const mobile2 = useMediaQuery('(max-width: 650px)');

  return (

    <section className="footer" id="footer">
      <div className="footerData">
        <div className="footerDataLogo">
          <div>
            <img src={mobile2 ? logoMobile : logo} alt="logo" />
          </div>
          <p>Dedicated to insuring the world&apos;s fun</p>
        </div>
        <div className="footerDataContact">
          <div className="contactTitle">
            <h2>NEED ASISTANCE?</h2>
            <div className="contactDivider" />
          </div>
          <div className="contactInfoContainer">
            <div className="contactInfoItem">
              <div className="ItemIcon">
                <img src={mobile ? emailMobile : email} alt="email" />
              </div>
              <div className="ItemData">
                {!mobile && <h6>EMAIL</h6>}
                <p>kk.general@kandkinsurance.com</p>
              </div>
            </div>
            <div className="contactInfoItem">
              <div className="ItemIcon">
                <img src={mobile ? phoneMobile : phone} alt="phone" />
              </div>
              <div className="ItemData">
                {!mobile && <h6>PHONE</h6>}
                <p>1-800-637-4757</p>
              </div>
            </div>
            <div className="contactInfoItem">
              <div className="ItemIcon">
                <img src={mobile ? addressMobile : address} alt="address" />
              </div>
              <div className="ItemData">
                {!mobile && <h6>ADDRESS</h6>}
                <p>1712 Magnavox Way, Fort Wayne, IN 46804</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footerDataSocial">
          <div className="socialIcons">
            <img src={mobile ? fbMobile : fb} alt="fb" />
            <img src={mobile ? twMobile : tw} alt="tw" />
            <img src={mobile ? igMobile : ig} alt="ig" />
            <img src={mobile ? ytMobile : yt} alt="yt" />
            <img src={mobile ? inMobile : linkedin} alt="in" />
          </div>
        </div>
      </div>
      <div className="footerCredits">
        <div>
          Credits | Privacy Policy | Terms & Conditions
        </div>
        <div>
          Copyright © 2022 K&K Insurance Group Inc.
        </div>
      </div>
    </section>
  );
};

export default Footer;
