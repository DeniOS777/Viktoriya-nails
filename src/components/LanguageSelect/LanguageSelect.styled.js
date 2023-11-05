import styled from 'styled-components';
import usa_flag from '../../images/usa-flag.svg';

export const Select = styled.select`
  width: ${p => (p.mobile ? '52px' : '38px')};
  height: ${p => (p.mobile ? '28px' : '22px')};
  font-size: 14px;
  color: transparent;
  border-style: none;
  border-radius: 4px;
  background-image: ${p => {
    switch (p.lang) {
      case 'ru':
        return 'linear-gradient(0deg,rgba(240, 19, 19, 1) 33%,rgba(36, 91, 217, 1) 33%,rgba(36, 91, 217, 1) 66%,rgba(255, 255, 255, 1) 66%)';
      case 'uk':
        return 'linear-gradient(0deg,rgba(247, 245, 14, 1) 50%,rgba(32, 98, 200, 1) 50%)';
      case 'en':
        return `url(${usa_flag})`;
      default:
        break;
    }
  }};
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;
