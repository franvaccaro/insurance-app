import React, { useEffect, useState } from 'react';
import './styles/menuMobile.css';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import loginMobile from '../assets/icons/Login_mobile.svg';
import logo from '../assets/icons/Logo.svg';
import closeMenu from '../assets/icons/Close_Mobile.svg';
import search from '../assets/icons/Search_mobile.svg';
import dropdown from '../assets/icons/Dropdown_mobile.svg';
import email from '../assets/icons/Email.svg';
import phone from '../assets/icons/Phone.svg';
import address from '../assets/icons/Address.svg';

const MenuMobile = () => {
  const dispatch = useDispatch();
  const [menuClass, setMenuClass] = useState('menuActive');
  const mobile = useMediaQuery('(max-width:650px)');

  const menuTransition = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    setMenuClass('menuClosed');
  };

  useEffect(() => {
    if (menuClass === 'menuClosed') {
      setTimeout(() => {
        dispatch({
          type: 'SET_MOBILEMENU',
          payload: {
            menuState: false,
          },
        });
      }, 1000);
    }
  }, [menuClass]);

  return (
    <div className={`menuMobile ${menuClass}`}>

      <div className="menuMobileHeader">
        <div className="userIconDisabled">
          <input
            type="image"
            src={loginMobile}
            width="24"
            height="24"
            alt="login"
          />
        </div>
        <div className="menuMobileLogo">
          <img
            src={logo}
            width={mobile ? '102' : '185'}
            height={mobile ? '16' : '30'}
            alt="logo"
          />
        </div>
        <div className="menuMobileClose">
          <input
            type="image"
            src={closeMenu}
            width="24"
            height="24"
            alt="close"
            onClick={(e) => menuTransition(e)}
          />
        </div>
      </div>

      <div className="menuMobileInputSection">
        <div className="menuMobileInputContainer">
          <input className="menuMobileInput" type="text" placeholder="Search" />
          <input
            className="menuMobileSearch"
            type="image"
            src={search}
            width="18"
            height="16"
            alt="Search"
          />
        </div>
      </div>

      <div className="menuMobileLinkSection">
        <div className="menuMobileLink">
          <p>Insurance & Coverage</p>
          <img src={dropdown} width="18" height="18" alt="dropdown" />
        </div>
        <div className="menuMobileLink">Claims</div>
        <div className="menuMobileLink">Support</div>
        <div className="menuMobileLink">About Us</div>
        <div className="menuMobileLink">Contact</div>
        <div className="menuMobileLink">Login / Register</div>
      </div>

      <div className="menuMobileDivider" />

      <div className="menuMobileFooter">
        <div className="menuMobileFooterTitle">
          <h3>NEED ASISTANCE?</h3>
          <div className="menuMobileFooterTitleLine" />
        </div>
        <div className="menuMobileFooterContact">
          <div className="menuMobileContactItem">
            <div className="menuMobileItemIcon">
              <img
                src={email}
                width={mobile ? '24' : '48'}
                height={mobile ? '24' : '48'}
                alt="email"
              />
            </div>
            <div className="menuMobileItemData">
              <p>kk.general@kandkinsurance.com</p>
            </div>
          </div>
          <div className="menuMobileContactItem">
            <div className="menuMobileItemIcon">
              <img
                src={phone}
                width={mobile ? '24' : '48'}
                height={mobile ? '24' : '48'}
                alt="phone"
              />
            </div>
            <div className="menuMobileItemData">
              <p>1-800-637-4757</p>
            </div>
          </div>
          <div className="menuMobileContactItem">
            <div className="menuMobileItemIcon">
              <img
                src={address}
                width={mobile ? '24' : '48'}
                height={mobile ? '24' : '48'}
                alt="phone"
              />
            </div>
            <div className="menuMobileItemData">
              <p>1712 Magnavox Way, Fort Wayne, IN 46804</p>
            </div>
          </div>
        </div>
      </div>

      <div className="menuMobileCredits">
        <div>
          Credits | Privacy Policy | Terms & Conditions
        </div>
        <div>
          Copyright © 2022 K&K Insurance Group Inc.
        </div>
      </div>

    </div>
  );
};

export default MenuMobile;
