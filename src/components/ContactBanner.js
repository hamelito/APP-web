import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  transform: translateY(-120px);

  .hero__name {
    font-family: 'Montserrat SemiBold';
    font-size: 2rem;
    color: var(--white);
    height: 0px;
    transform: translateY(-40px);
  }
  .contactBanner__wrapper {
    background-color: var(--verte);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="hero__name">
          <Typewriter
            options={{
              strings: ['Vous avez un projet de rénovation en tete en tête ?'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="contactBanner__wrapper">
          <PText>Nous sommes là pour vous et nous vous aiderons</PText>
          <h3 className="contactBanner__heading">Laiser nous vous aider</h3>
          <Button btnText="Contacter Nous" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
