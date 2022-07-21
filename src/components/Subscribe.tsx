import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import './styles/subscribe.css';

const Subscribe: React.FC = () => {
  const mobile = useMediaQuery('(max-width:1400px)');

  return (
    <section className="subs">
      <div className="subsTitle">
        <h2>SUBSCRIBE TO NEWSLETTER</h2>
        <div className="subsDivider" />
      </div>
      <div className="subsInputSection">
        <div className="subsInputContainer">
          <input
            type="email"
            placeholder={mobile ? 'EMAIL ADDRESS' : 'ENTER YOUR EMAIL ADDRESS'}
            className="subsInput"
            required
          />
          <button type="button" className="subsBtn">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
