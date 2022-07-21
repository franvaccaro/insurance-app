import React from 'react';
import './styles/menu.css';
import chevron from '../assets/icons/Menu_Chevron.svg';

const Menu: React.FC = () => {
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

  return (
    <div className="menu">
      {
        dropdownArr.map((item) => (
          <div className="menu-item" key={item.title}>
            {item.title}
            <img src={chevron} alt="go" />
          </div>
        ))
      }
    </div>
  );
};

export default Menu;
