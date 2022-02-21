import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/haut1.jpg';
import SectionTitle from './SectionTitle';

const AboutPageStyles = styled.div`
  padding: 10rem 0 20rem 0;
  transform: translateY(20px);

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
    height: 300px;
    box-shadow: 5px 7px 20px 9px var(--verte);
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      height: 10px;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .hero__name {
    font-family: 'Montserrat SemiBold';
    font-size: 2rem;
    color: var(--white);
    height: 0px;
    transform: translateY(-20px);
  }
  @media only screen and (max-width: 768px) {
    transform: translateY(-20px);
    padding: 10rem 0;
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 1.5rem;
      color: var(--white);
      height: 0px;
    }
    .right {
      img {
        border: 2px solid var(--gray-1);
        height: 10px;
      }
    }
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function HauDePage() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="right">
              <div className="about__info">
                <div className="hero__name">
                  <Typewriter
                    options={{
                      strings: ['Laisser nous rénové avec ...'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                <SectionTitle
                  subheading="Laisser nous rénové avec :"
                  heading="GUF BTP"
                />
                <PText>
                  Nous allons vous faire sourire une fois votre clé à main.
                </PText>
              </div>
              <Button btnText="Nos Estimations" btnLink="#" />
            </div>
            <div className="left">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
