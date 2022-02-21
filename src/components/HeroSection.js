import React from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    max-height: 10000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transform: translateY(-140px);
  }
  .hero__heading {
    font-size: 2rem;
    position: relative;
    min-height: -10px;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 3rem;
      color: var(--white);
      height: 0px;
    }
  }
  .hero__img {
    max-width: 1500px;
    width: 100%;
    height: 450px;
    margin: 0 auto;
    box-shadow: 5px 7px 20px 9px var(--verte);
  }
  .hero__info {
    margin-top: -20rem;
  }

  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-100deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 950px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 2rem;
      }
    }
    .hero__img {
      height: 400px;
    }
    .numero {
      height: 400px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <div className="hero__heading">
            <div className="hero__name">
              <Typewriter
                options={{
                  strings: [
                    'A propos de nous',
                    'Tout savoir sur la rénovation',
                    ' Estimation du budged',
                    ' Projet',
                  ],
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString()
                    .callFunction(() => {
                      console.log('String typed out!');
                    })
                    .pauseFor(1000)
                    .deleteAll()
                    .callFunction(() => {
                      console.log('All strings were deleted');
                    })
                    .start();
                }}
              />
            </div>
          </div>
          <div className="hero__img">
            <img src="http://127.0.0.1:8000/media/cuisine.jpeg" alt="" />
          </div>

          <div className="hero__info">
            <PText>
              <a>
                Avec GUEF BTP, Un de nos chargés D’affaire se déplace Chez vous
                en moins De 24H pour chiffrer Vos travaux et vous Accompagner de
                la Premier visite à Domicile, jusqu’à la réception de l’ouvrage
                Avec nos artisans
              </a>
            </PText>
            <Button
              btnText="Voir nos résant traveaux réalisées"
              btnLink="/projects"
            />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
