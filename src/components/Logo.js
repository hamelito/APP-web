import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './webscript.png';

const StyleLink = styled(Link)`
  font-size: #ffc000;
  font-weight: 700;
  color: #f31700;
  min-height: 48px;
  display: flex;
  align-items: lift;
  padding: 0 20px 0 25px;
  border-bottom: rgba(255, 255, 255, 0.1) 1px solid;
  &:hover {
    text-decoration: none;
  }
  .logo {
    img {
      height: 34px;
      width: 34px;
      margin-right: 10px;
      object-fit: cover;
    }
    span {
      opacity: 1;
      color: var(--verte);
    }
  }
`;

function Logo() {
  return (
    <StyleLink to="/">
      <div className="logo">
        <span>GUEF BTP</span>
        <img src={logo} alt="webscript" />
      </div>
    </StyleLink>
  );
}

export default Logo;
