import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/guef.jpg';
import ContactBanner from '../components/ContactBanner';
import AssosierRenovation from '../components/AssosierRenovation';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  transform: translateY(-90px);

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
  .leftT {
    flex: 3;
    transform: translateX(490px);
  }
  .rightT {
    flex: 2;
    transform: translateX(-700px);
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
  .rightT {
    img {
      border: 2px solid var(--gray-1);
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

export default function Renovation() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Salut, Voici nos types de <span>rénovation</span>
              </p>
              <h2 className="about__heading">Première étape : le gros œuvre</h2>
              <div className="about__info">
                <PText>
                  Cette phase initiale est certainement la plus lourde et
                  concerne en particulier les travaux de : Rénovation de la
                  couverture
                  <br /> <br />
                  Si votre couverture est en mauvais état, il est plus que
                  souhaitable de commencer par elle afin de mettre votre maison
                  au sec pour un bon moment car la durée de vie d’une couverture
                  traditionnelle neuve (ardoises, tuiles, …) est d’environ 50
                  ans contre environ 25 ans pour une étanchéité goudron. Dans le
                  cas d’une étanchéité à membrane EPDM (cas des toits plats), la
                  durée de vie de celle-ci est équivalente à une couverture
                  traditionnelle.s
                </PText>
              </div>
              <Button btnText="Nos  estimations" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <br />
          <div className="top-section">
            <div className="left">
              <h1 className="about__heading">
                Rénovation de la maçonnerie et démolition
              </h1>
              <div className="about__info">
                <PText>
                  <br /> <br />
                  Cela concerne les murs, la toiture, les ouvertures dans les
                  cloisons : la maçonnerie touche directement à la structure
                  même de la maison et participe activement à la solidité de
                  l’ensemble, nous ne modifions la maçonnerie d’une maison en
                  pierre comme celle d’une maison construite en agglo … les
                  précautions et outils mis en œuvre par le maçon ne sont pas
                  les mêmes ! Bien souvent les murs en pierre ont été assemblés
                  (pour les maisons anciennes en tout cas) à l’aide de terre et
                  de chaux, il faut prendre un certain nombre de précaution si
                  celui-ci ne veut pas voir la façade ou le pan de mur sur
                  lequel il travaille descendre tout seul ! Cela comprend
                  également la réalisation d’une dalle béton, de murs porteurs,
                  de planchers et de pose d’IPN (selon la nature des travaux)
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button btnText="Nos  estimations" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <br />
          <div className="top-section">
            <div className="left">
              <h2 className="about__heading">
                Réparation, renforcement, rénovation de la charpente
              </h2>
              <div className="about__info">
                <PText>
                  Si votre maison et par voie de conséquence votre charpente
                  n’ont pas pris l’eau, celle-ci devrait être en bon état, lors
                  des rénovations importantes la charpente est en générale un
                  élément ne nécessitant que quelques modifications légères…
                  sauf dans le cas de combles perdus que vous souhaitez rendre
                  habitables. Pour les rénovations courantes les pièces
                  renforcées ou modifiées sont les fermes, les pannes et
                  chevrons
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button btnText="Nos  estimations" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <br />
          <div className="top-section">
            <div className="left">
              <h2 className="about__heading">Isolation de combles</h2>
              <div className="about__info">
                <PText>
                  Si votre maison dispose de combles, il serait dommage de la
                  rénover sans s’occuper d’isoler les combles au préalable. En
                  effet, environ 20 à 30% des déperditions de chaleur passent
                  par le toit. Une bonne isolation de vos combles c’est 260 à
                  300 mm de laine minérale (pour faire simple, mais il est tout
                  à fait possible d’utiliser de la laine de bois, laine de
                  chanvre, un complexe isolant à base de plumes… avec des
                  épaisseurs différentes) qui vous permettront d’obtenir un
                  coefficient de résistance thermique R = 6 (tout va être
                  fonction de la nature de l’isolant posé). chevrons
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button btnText="Nos  estimations" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <br />
          <div className="top-section">
            <div className="leftT">
              <p className="about__subheading">
                Ici represente la deuxième phase de <span>rénovation</span>
              </p>
              <h2 className="about__heading">
                Deuxième étape : le second œuvre
              </h2>
              <div className="about__info">
                <PText>
                  Une fois le gros œuvre achevé, il est possible de passer à
                  l’étape suivante afin de poursuivre la rénovation de votre
                  maison. Le second œuvre concerne ainsi : Menuiseries
                  extérieures
                  <br /> <br />
                  Cela concerne à la fois les verrières, fenêtres de toit,
                  volets et stores. A savoir que le simple fait de changer les
                  fenêtres dans une pièce ( sans autre intervention) peut vous
                  faire gagner 2 à 3 degrés dans celle ci.
                </PText>
              </div>
              <Button btnText="Nos  estimations" btnLink="#" />
            </div>
            <div className="rightT">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <br />
          <div className="top-section">
            <div className="leftT">
              <h1 className="about__heading">
                Isolation phonique et thermique du logement (toiture, murs et
                sols)
              </h1>
              <div className="about__info">
                <PText>
                  <br /> <br />
                  Cela concerne les murs, la toiture, les ouvertures dans les
                </PText>
              </div>
              <Button btnText="Nos  estimations" btnLink="#" />
            </div>
            <div className="rightT">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <br />
          <div className="top-section">
            <div className="leftT">
              <h2 className="about__heading">
                Cloisons, portes et menuiseries intérieures
              </h2>
              <div className="about__info">
                <PText>
                  Si votre maison et par voie de conséquence votre charpente
                </PText>
              </div>
              <Button btnText="Nos  estimations" btnLink="#" />
            </div>
            <div className="rightT">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <br />
          <div className="top-section">
            <div className="leftT">
              <h2 className="about__heading">
                Rénovation de l’installation de plomberie
              </h2>
              <div className="about__info">
                <PText>
                  Si la maison que vous souhaitez rénover possède encore ( il y
                  en a beaucoup) une installation avec des tuyaux d’évacuation,
                  d’ admission d’eau en plomb prévoyez de les remplacer ce sera
                  nettement plus pratique particulièrement si vous modifiez
                  l’implantation des pièces et plus sécurisant pour l’avenir (
                  le plomb reste un métal toxique). Une nouvelle fois, le plan
                  d’implantation est dans ce cas indispensable pour éviter les
                  surprises et surtout vous permettre d’avoir un devis au plus
                  juste (difficile de calculer des longueurs de tuyaux justes
                  sans un plan sérieux !).
                </PText>
              </div>
              <Button btnText="Nos  estimations" btnLink="#" />
            </div>
            <div className="rightT">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <br />
          <br />
          <div className="top-section">
            <div className="leftT">
              <h2 className="about__heading">Rénovation du chauffage</h2>
              <div className="about__info">
                <PText>
                  Si la chaudière en place a moins de 10 ans et est suffisamment
                  puissante, laissez là en place, elle devrait suffire pour
                  subvenir à vos besoins (sauf si vous agrandissez la maison de
                  façon substantielle){' '}
                </PText>
              </div>
              <Button btnText="Nos  estimations" btnLink="#" />
            </div>
            <div className="rightT">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <br />
          <div className="top-section">
            <div className="leftT">
              <h2 className="about__heading">
                Rénovation de l’installation électrique
              </h2>
              <div className="about__info">
                <PText>
                  Ceci est un poste sur lequel il ne faut en aucun cas « mégoter
                  » car ce il est à l’origine d’une grande partie des sinistres
                  ( incendies, …) déclarés aux assurances chaque année donc une
                  bonne installation dans les normes ( NFC 15-100 pour ne pas la
                  citer) c’est 25 à 30 ans de tranquillité. Mais avant de
                  rénover, un bon plan est indispensable afin de savoir avec
                  précision l’usage de chaque pièce, le sens de circulation dans
                  la maison, ensuite l’électricien pourra mettre en place son
                  plan de calepinage et rénover votre installation.
                  <br />
                  <br />
                  Tous les “gros” travaux enfin terminés, il ne vous reste plus
                  qu’à passer à la dernière étape : les finitions. Celle-ci
                  n’est pas à sous-estimer, car le coût de certaines prestations
                  peut fortement varier selon les matériaux employés :
                </PText>
              </div>
              <Button btnText="Nos  estimations" btnLink="#" />
            </div>
            <div className="rightT">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <br />
          <br />
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Enfin la dernière phase de <span>rénovation</span>
              </p>
              <h2 className="about__heading">
                Troisième étape : les finitions
              </h2>
              <div className="about__info">
                <PText>
                  préparation de la chape (ragréage) afin de pouvoir
                  correctement poser les revêtements de sols : carrelage,
                  moquette, parquet… <br />
                  <br />
                  revêtements muraux : carrelage, faïence, papier peint,
                  peinture : dans la mesure où une pièce est terminée, le
                  peintre peut intervenir à quelques exceptions toutefois comme
                  la cuisine où il est préférable qu’il passe avant le
                  cuisiniste et face quelques retouches ( si besoin) après la
                  pose des différents éléments. <br />
                  <br />
                  équipements de confort : cuisine, mobilier de salle de bains,
                  escalier…
                </PText>
              </div>
              <Button btnText="Nos  estimations" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <AssosierRenovation />
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
