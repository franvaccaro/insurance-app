import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import './styles/banner.css';

const Banner: React.FC = () => {
  const mobile = useMediaQuery('(max-width:650px)');

  return (
    <section className="bannerContainer b1">
      <div className="bannerData bannerFilter">
        <div className="bannerText">
          <h2>
            We take fun
            <br />
            seriously
          </h2>
          {
            mobile
              ? (
                <p>
                  The leading provider of sports,
                  leisure and entertainment insurance products.
                </p>
              )
              : (
                <p>
                  Since 1952 K&K has provided insurance products and claims
                  services for the sports, leisure, recreation and event industries
                </p>
              )
          }
          {
            !mobile
            && (
              <p>
                <b>{'K&K Insurance '}</b>
                is dedicated to insuring the world&apos;s fun.
              </p>
            )
          }
        </div>
        <div className="banner-btn-container">
          <div className="banner-btn">
            <a href="#steps">
              GET STARTED
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
