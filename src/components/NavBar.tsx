import React, { useEffect, useState } from 'react';
import './styles/navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { RootState } from '../redux/store';
import loginMobile from '../assets/icons/Login_mobile.svg';
import logoMobile from '../assets/icons/Logo_mobile.svg';
import logo from '../assets/icons/Logo.svg';
import menu from '../assets/icons/Menu.svg';
import search from '../assets/icons/Search.svg';
import login from '../assets/icons/Login.svg';
import drop from '../assets/icons/Dropdown_Icon.svg';
import Menu from './Menu';

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
      <div className="logo">
        <input
          type="image"
          src={logo}
          alt=""
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>
      <div className="navItems">
        <div className="nav-dropdown">
          <button
            type="button"
            onClick={(e) => handleMenuClick(e)}
          >
            {'INSURANCE & COVERAGE '}
            <img src={drop} alt="drop" />
          </button>
          {navMenuState && <Menu menuClass={navMenuClass} />}
        </div>
        <a href="#claims">CLAIMS</a>
        <a href="#footer">SUPPORT</a>
        <a href="#choose">ABOUT US</a>
        <a href="#footer">CONTACT</a>
        <div>|</div>
        <div className="nav-search">
          <img src={search} alt="search" />
        </div>
        <div className="nav-login">
          <img src={login} alt="login" />
        </div>
      </div>

      <div className="navMobile">
        <div className="loginMobile">
          <input type="image" src={loginMobile} alt="" />
        </div>
        <div className="logoMobile">
          <input
            type="image"
            src={mobile ? logoMobile : logo}
            alt="logo"
            onClick={() => window.scrollTo(0, 0)}
          />
        </div>
        <div className="menuBurger">
          <input
            type="image"
            src={menu}
            alt=""
            onClick={() => dispatch({
              type: 'SET_MOBILEMENU',
              payload: {
                menuState: true,
              },
            })}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
