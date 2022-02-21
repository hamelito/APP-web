import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
  }
  h6 {
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h6 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({ heading = 'need heading' }) {
  return (
    <SectionTitleStyle className="section-title">
      <h6>{heading}</h6>
    </SectionTitleStyle>
  );
}
