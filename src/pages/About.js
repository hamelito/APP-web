import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/cyrille.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  transform: translateY(-80px);
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
    transform: translateY(-80px);
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
      border-radius: 8px;
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
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
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

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <h2 className="about__heading">Spéciliste dans la renovation</h2>
              <div className="about__info">
                <PText>
                  GUEF BTP, société par actions simplifiée, immatriculée sous le
                  SIREN 897718722, est active depuis moins d'un an. Domiciliée à
                  CHAMPS-SUR-MARNE (77420), elle est spécialisée dans le secteur
                  des activités spécialisées de design. Societe.com recense 1
                  établissement, 1 événement notable depuis un an ainsi qu' un
                  mandataire depuis le début de son activité. Cedric GUEFACK
                  DJIATSA est président de l'entreprise GUEF BTP.
                </PText>
              </div>
              <Button btnText="Nos projets" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2010-2012"
                items={['naissance entreprise']}
              />
              <AboutInfoItem
                title="2012-2016"
                items={[
                  'Première projet de rénovation d appartement en Il de France ',
                ]}
              />
              <AboutInfoItem title="2016-" items={['Contitueté de rénové']} />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
