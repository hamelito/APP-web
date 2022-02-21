import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: relative;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
    width: 100%;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 400px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Localisation principale</h3>
          <PText>43 AVENU GENERALE DE GAULLE 77420 CHAMPS SUR MARNE</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/43+Av.+du+G%C3%A9n%C3%A9ral+de+Gaulle,+77420+Champs-sur-Marne/@48.8514285,2.5920863,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6102a8d927a69:0x329152775b319281!8m2!3d48.851425!4d2.594275"
            target="_blank"
            rel="noreferrer"
          >
            Ouvrer google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
