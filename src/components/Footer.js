import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;

  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .li{
    color: var(--verte);
  }
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--verte);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">GUF BTP</h1>
          <PText>
            <a>
              GUEF BTP vous accompagne dans tous vos travaux de rénovation.
              <br />
              <br />
              Un de nos chargés D’affaire se déplace Chez vous en moins De 24H
              pour chiffrer Vos travaux et vous Accompagner de la Premier visite
              à Domicile, jusqu’à la réception de l’ouvrage Avec nos artisans
            </a>
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Lien important"
            links={[
              {
                title: 'Accueil',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'Propos',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Estimation',
                path: '/estimation',
              },
              {
                type: 'Link',
                title: 'Rénovation',
                path: '/renovation',
              },
              {
                type: 'Link',
                title: 'Contacter',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Info Contact"
            links={[
              {
                title: '+33 7 52 32 68 50',
                path: 'tel:+33 (0) 7 52 32 68 50',
              },
              {
                title: 'servise-client@guefbtp.fr',
                path: 'mailto:servise-client@guefbtp.fr',
              },
              {
                title: '43 AVENU GENERALE DE GAULLE 77420 CHAMPS SUR MARNE',
                path:
                  'https://www.google.com/maps/place/43+Av.+du+G%C3%A9n%C3%A9ral+de+Gaulle,+77420+Champs-sur-Marne/@48.8514285,2.5920863,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6102a8d927a69:0x329152775b319281!8m2!3d48.851425!4d2.594275',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Lien sociaux"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            <a>
              © 2022 - Cyrille Njugnong |{' '}
              <a target="_blank" rel="noreferrer" href="http://webcifar.com">
                +33752531130
              </a>{' '}
            </a>
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
