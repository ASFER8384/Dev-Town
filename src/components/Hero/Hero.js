import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Main1 from './img/header/img.jpg';
import Main2 from './img/header/img2.jpg';
import Main3 from './img/header/img3.jpg';
import Main4 from './img/header/img4.jpg';

const HeroContainer = styled.div`
  .grid-container {
    display: grid;
    height: 50rem;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'one two four' 'one two four-low';
    gap: 1.3rem;
    margin-top: 1.3rem;
  }

  .cat-her {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home-container {
    /* padding-bottom: 12rem; */
    padding: 30px;
  }

  .featured {
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }

  .main-description {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    color: white;
    font-size: 3.8rem;
    font-weight: 600;
  }

  .featured img {
    height: 100%;
    width: 100%;
    border: 2px solid black;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .grid-one {
    grid-area: one;
  }

  .grid-two {
    grid-area: two;
  }

  .grid-four {
    grid-area: four;
  }

  .grid-four-low {
    grid-area: four-low;
  }

  .lil-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in;
  }

  #img1:hover {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  #img2:hover {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  #img3:hover {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  #img4:hover {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  @media (max-width: 750px) {
    .grid-container {
      height: 500px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-template-areas:
        'one two'
        'four four-low';
      grid-gap: 13px;
      gap: 13px;
    }
  }

  @media (max-width: 450px) {
    .main-description {
      bottom: 1rem;
      left: 1rem;
      font-size: 3rem;
    }
  }

  @media (max-width: 400px) {
    .main-description {
      bottom: 1rem;
      left: 0.5rem;
      font-size: 2.5rem;
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <div className="home-container">
        <h1 className="cat-her">Our Products</h1>
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <Link to="products">
                <div id="img1" className="lil-overlay"></div>
                <img src={Main1} alt="img1" />
                <p className="main-description">Sneakers</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to="products">
                <div id="img2" className="lil-overlay"></div>
                <img src={Main2} alt="img2" />
                <p className="main-description">Flats</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to="products">
                <div id="img3" className="lil-overlay"></div>
                <img src={Main3} alt="img3" />
                <p className="main-description">Sandals</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to="products">
                <div id="img4" className="lil-overlay"></div>
                <img src={Main4} alt="img4" />
                <p className="main-description">Heels</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;

