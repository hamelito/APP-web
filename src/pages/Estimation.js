import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import ContactBanner from '../components/ContactBanner';
import TableauEstimationComplait from '../components/TableauEstimationComplait';
import TableauEstimationMaison from '../components/TableauEstimationMaison';
import TableauEstimationCombles from '../components/TableauEstimationCombles';

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

export default function Estimation() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <h2 className="about__heading">
                Le coût d’une rénovation de maison
              </h2>
              <div className="about__info">
                <PText>
                  Afin de vous aider à mieux appréhender vos futurs travaux de
                  rénovation, nous vous proposons un tableau récapitulant le
                  coût des principaux postes. Que vous ayez le projet de
                  réaménager et agencer vos pièces (en déplaçant des cloisons),
                  créer une cuisine, une salle de bains, ou encore rénover votre
                  séjour ou vos chambres, nous sommes à vos côtés :<br />
                  <br />
                  <br />
                  <TableauEstimationMaison />
                </PText>
              </div>
              <Button btnText="Nous contacter" btnLink="#" />
              <h2 className="about__heading">
                Du simple rafraîchissement à la rénovation complète
              </h2>
              <div className="about__info">
                <PText>
                  Les travaux de rénovation peuvent généralement se classer en
                  trois catégories principales :<br />
                  <br /> la rénovation lourde : murs porteurs, planchers,
                  toiture, évacuations, remise à neuf totale de l’électricité et
                  de la plomberie, isolation… <br />
                  la rénovation classique : menuiseries, cloisons, modifications
                  en électricité et en plomberie, rénovation de la cuisine et
                  des salles de bains… <br />
                  les rafraîchissements : revêtements de sols et muraux
                  (parquet, moquette, carrelage, faïence), peintures, petit
                  mobilier… <br />
                  <br />
                  Le coût des travaux varie selon la catégorie dans laquelle
                  vous vous situez. En règle générale, vous pouvez vous baser
                  sur les montants moyens suivants afin de prévoir votre budget
                  :<br />
                  <br />
                  <br />
                  <TableauEstimationComplait />
                </PText>
              </div>
              <Button btnText="Nous contacter" btnLink="/contact" />
              <h2 className="about__heading">La rénovation des combles</h2>
              <div className="about__info">
                <PText>
                  Si vous constatez des températures élevées en été et plutôt
                  basses en hiver à l’étage de votre logement, pensez à faire
                  isoler vos combles avec des matériaux performants. Vous
                  réduirez ainsi sensiblement ces problèmes de variation de
                  températures tout au long de l’année et gagnerez en confort au
                  quotidien :<br />
                  <br />
                  <br />
                  <TableauEstimationCombles />
                </PText>
              </div>
              <Button btnText="Nous contacter" btnLink="/contact" />
            </div>
            <br />
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
