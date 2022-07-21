import React from 'react';
import './styles/quote.css';

const Quote: React.FC = () => (
  <section className="quote" id="quote">
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
          pattern="[0-9]{11}"
          required
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
          // eslint-disable-next-line no-alert
          onClick={() => alert('Submited successfully!')}
        >
          SUBMIT
        </button>
      </form>
    </div>
  </section>
);

export default Quote;
