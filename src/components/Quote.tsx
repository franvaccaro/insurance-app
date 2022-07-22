import React from 'react';
import './styles/quote.css';
import { useDispatch } from 'react-redux';

const Quote: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        id: Date.now(),
        message: 'This is a prototype, but thanks for trying! 🙌',
      },
    });
  };

  return (
    <section className="quote" id="quote">
      <div className="quoteFilter">
        <div className="quoteContainer1">
          <div className="quoteTitle">
            <h2>GET A QUOTE</h2>
            <div className="quoteDivider" />
          </div>
        </div>
        <div className="quoteContainer2">
          <form className="quoteForm">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="quoteFormInput"
              required
            />
            <input
              type="tel"
              placeholder="PHONE"
              className="quoteFormInput"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="quoteFormInput"
              required
            />
            <select name="select" defaultValue="">
              <option value="" disabled hidden>CATEGORY</option>
              <option value="Sports">Sports</option>
              <option value="Leisure">Leisure</option>
              <option value="Entertainemnt">Entertainment</option>
              <option value="Martial Arts">Martial Arts</option>
            </select>
            <input
              type="text"
              placeholder="MESSAGE"
              className="quoteFormInput"
            />
            <button
              className="quoteFormBtn"
              type="submit"
              onClick={(e) => handleClick(e)}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Quote;
