import React, { useEffect, useState } from 'react';
import './styles/navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { RootState } from '../redux/store';
import loginMobile from '../assets/icons/Login_mobile.svg';
import logo from '../assets/icons/Logo.svg';
import menu from '../assets/icons/Menu.svg';
import search from '../assets/icons/Search.svg';
import login from '../assets/icons/Login.svg';
import drop from '../assets/icons/Dropdown_Icon.svg';
import Menu from './Menu';
import FadeInSection from './fades/FadeInSection';

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const navMenuState = useSelector((state: RootState) => state.navMenu.navMenuState);
  const [navMenuClass, setNavMenuClass] = useState('');
  const mobile = useMediaQuery('(max-width:650px)');

  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (navMenuState === false) {
      setNavMenuClass('navMenuActive');
      dispatch({
        type: 'SET_NAVMENU',
        payload: {
          navMenu: true,
        },
      });
    } else {
      setNavMenuClass('navMenuInactive');
    }
  };

  useEffect(() => {
    if (navMenuClass === 'navMenuInactive') {
      setTimeout(() => {
        dispatch({
          type: 'SET_NAVMENU',
          payload: {
            navMenu: false,
          },
        });
      }, 500);
    }
  }, [navMenuClass]);

  return (
    <nav>
      <FadeInSection extClass="logo">
        <input
          type="image"
          src={logo}
          width="185"
          height="30"
          alt="Logo"
          onClick={() => window.scrollTo(0, 0)}
        />
      </FadeInSection>
      <FadeInSection extClass="navItems">
        <div className="nav-dropdown">
          <button
            type="button"
            onClick={(e) => handleMenuClick(e)}
          >
            {'INSURANCE & COVERAGE '}
            <img src={drop} width="12" height="8" alt="drop" />
          </button>
          {navMenuState && <Menu menuClass={navMenuClass} />}
        </div>
        <a href="#claims">CLAIMS</a>
        <a href="#footer">SUPPORT</a>
        <a href="#choose">ABOUT US</a>
        <a href="#footer">CONTACT</a>
        <div>|</div>
        <div className="nav-search">
          <img src={search} width="16" height="16" alt="search" />
        </div>
        <div className="nav-login">
          <img src={login} width="18" height="16" alt="login" />
        </div>
      </FadeInSection>

      <FadeInSection extClass="navMobile">
        <div className="loginMobile">
          <input
            type="image"
            src={loginMobile}
            width="24"
            height="24"
            alt="Login"
          />
        </div>
        <div className="logoMobile">
          <input
            type="image"
            src={logo}
            width={mobile ? '102' : '185'}
            height={mobile ? '16' : '30'}
            alt="logo"
            onClick={() => window.scrollTo(0, 0)}
          />
        </div>
        <div className="menuBurger">
          <input
            type="image"
            src={menu}
            width="18"
            height="12"
            alt="Menu"
            onClick={() => dispatch({
              type: 'SET_MOBILEMENU',
              payload: {
                menuState: true,
              },
            })}
          />
        </div>
      </FadeInSection>
    </nav>
  );
};

export default NavBar;
