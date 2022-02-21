import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyles = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    transform: translateY(-90px);
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 2rem;
      color: var(--white);
      height: 0px;
      transform: translateY(-20px);
    }
  }

  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <div className="hero__name">
            <Typewriter
              options={{
                strings: ['Nous introduissons GUF BTP ...'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <SectionTitle
            subheading="Nous introduire ..."
            heading="A propos de nous"
          />
          <PText>
            GUEF BTP, société par actions simplifiée, immatriculée sous le SIREN
            897718722, est active depuis moins d'un an. Domiciliée à
            CHAMPS-SUR-MARNE (77420), elle est spécialisée dans le secteur des
            activités spécialisées de design. Societe.com recense 1
            établissement, 1 événement notable depuis un an ainsi qu' un
            mandataire depuis le début de son activité. Cedric GUEFACK DJIATSA
            est président de l'entreprise GUEF BTP.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Nos projets" btnLink="/projects" />
            <Button btnText="Lire plus" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
