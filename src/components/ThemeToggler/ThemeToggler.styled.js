import styled from 'styled-components';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

export const CheckBox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`;

export const BackPanel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: ${p => (p.mobile ? '52px' : '40px')};
  height: ${p => (p.mobile ? '28px' : '22px')};
  background-color: ${p => p.theme.colors.themeTogglerBackground};
  border-radius: 25px;
  cursor: pointer;

  &:focus-within {
    outline: 2px solid #245fcc;
  }

  @media (max-width: 767px) {
    margin: 0 auto;
    margin-bottom: 32px;
  }
`;

export const Switcher = styled.span`
  position: absolute;
  left: 1px;
  display: block;
  width: ${p => (p.mobile ? '26px' : '20px')};
  height: ${p => (p.mobile ? '26px' : '20px')};
  background-color: white;
  border-radius: 50%;
  transition: transform 300ms ease-in-out;
  transform: ${p => {
    if (p.mode === 'dark' && p.mobile) {
      return 'translateX(24px)';
    }
    if (p.mode === 'dark' && !p.mobile) {
      return 'translateX(18px)';
    } else {
      return 'translateX(0)';
    }
  }};
`;

export const MoonIcon = styled(BsMoonStarsFill)`
  position: absolute;
  right: 2px;
  fill: ${p => p.theme.colors.themeTogglerIcon};
  transform: rotate(270deg);
`;

export const SunIcon = styled(BsSunFill)`
  position: absolute;
  left: 2px;
  fill: ${p => p.theme.colors.themeTogglerIcon};
`;
