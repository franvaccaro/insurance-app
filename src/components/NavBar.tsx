import React, { useState } from 'react';
import './styles/navbar.css';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
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
  const [dropdown, setDropdown] = useState(false);
  const mobile = useMediaQuery('(max-width:650px)');

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
          <button type="button" onClick={() => setDropdown(!dropdown)}>
            {'INSURANCE & COVERAGE '}
            <img src={drop} alt="drop" />
          </button>
          {dropdown && <Menu />}
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
