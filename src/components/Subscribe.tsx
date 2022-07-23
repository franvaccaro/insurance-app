import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';
import './styles/subscribe.css';
import { useDispatch } from 'react-redux';
import FadeInSection from './fades/FadeInSection';

const Subscribe: React.FC = () => {
  const dispatch = useDispatch();
  const mobile = useMediaQuery('(max-width:1400px)');
  const [inputValue, setInputValue] = useState('');

  const handleSubscribe = () => {
    setInputValue('');
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        id: Date.now(),
        message: "This is a prototype. You haven't been subscribed to anything! 👍",
      },
    });
  };

  return (
    <section className="subs">
      <FadeInSection extClass="subsTitle">
        <h2>SUBSCRIBE TO NEWSLETTER</h2>
        <div className="subsDivider" />
      </FadeInSection>
      <div className="subsInputSection">
        <div className="subsInputContainer">
          <input
            type="email"
            placeholder={mobile ? 'EMAIL ADDRESS' : 'ENTER YOUR EMAIL ADDRESS'}
            className="subsInput"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="button"
            className="subsBtn"
            onClick={() => handleSubscribe()}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
