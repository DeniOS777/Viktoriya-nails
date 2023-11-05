import styled from 'styled-components';

export const NavSite = styled.nav`
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 16px;
  row-gap: 24px;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (min-width: 1230px) {
    column-gap: 48px;
  }
`;

export const Link = styled.a`
  position: relative;
  display: inline-block;
  padding-top: 8px;
  padding-bottom: 8px;
  color: inherit;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 767px) {
    font-size: 22px;
    letter-spacing: 0.03em;
  }

  @media (min-width: 1230px) {
    font-size: 20px;
    letter-spacing: 0.03em;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 0;
    height: 2px;
    background-color: ${p => p.theme.colors.underlineHover};
    transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &:hover,
  :focus {
    color: ${p => p.theme.colors.navigationHover};
  }

  &:hover::after,
  :focus::after {
    width: 100%;
  }
`;
