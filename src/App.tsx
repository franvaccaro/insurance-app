import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import type { RootState } from './redux/store';
import Banner from './components/Banner';
import Choose from './components/Choose';
import Claims from './components/Claims';
import NavBar from './components/NavBar';
import Quote from './components/Quote';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import MenuMobile from './components/MenuMobile';

function App() {
  const menuState = useSelector((state: RootState) => state.mobileMenu.menuState);

  return (
    <div className="App">
      {menuState && <MenuMobile />}
      <NavBar />
      <Banner />
      <Choose />
      <Claims />
      <Quote />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
