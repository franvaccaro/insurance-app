import React from 'react';
import './styles/menu.css';
import chevron from '../assets/icons/Menu_Chevron.svg';

interface navMenuModel {
  menuClass: string
}

const Menu: React.FC<navMenuModel> = ({ menuClass }) => {
  const dropdownArr = [
    {
      title: 'Sports',
    },
    {
      title: 'Recreation',
    },
    {
      title: 'Health & Fitness',
    },
    {
      title: 'Event & Attractions',
    },
    {
      title: 'Venues',
    },
    {
      title: 'Motorsports',
    },
    {
      title: 'Outfitters & Guides',
    },
    {
      title: 'Camps',
    },
    {
      title: 'Entertainment',
    },
    {
      title: 'Products Liability',
    },
    {
      title: 'Franchised Dealerships',
    },
    {
      title: 'D&O with EPLI',
    },
    {
      title: 'Campground Resort',
    },
  ];

  // eslint-disable-next-line no-unused-vars

  return (
    <div className={`menu ${menuClass}`}>
      {
        dropdownArr.map((item) => (
          <div className="menu-item" key={item.title}>
            {item.title}
            <img src={chevron} width="8" height="12" alt="go" />
          </div>
        ))
      }
    </div>
  );
};

export default Menu;
