import styled from 'styled-components';
import qr_template from 'images/qr-template.svg';
import qr from 'images/qr-code.png';

export const Footer = styled.footer`
  padding-top: 24px;
  padding-bottom: 32px;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${p => p.theme.colors.footerBackground};
`;

export const Container = styled.div`
  max-width: 1230px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  @media (max-width: 767px) {
    text-align: center;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 24px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const WrapLeft = styled.div`
  @media (max-width: 767px) {
    margin-bottom: 32px;
    text-align: center;
  }

  @media (min-width: 768px) {
    display: flex;
    column-gap: 96px;
  }

  @media (min-width: 1230px) {
    column-gap: 148px;
  }
`;

export const WrapRight = styled.div`
  @media (min-width: 1230px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Link = styled.a`
  position: relative;
  display: inline-block;
  padding-top: 8px;
  padding-bottom: 8px;
  color: inherit;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (min-width: 768px) {
    font-size: 18px;
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

export const Menu = styled.ul`
  @media (max-width: 767px) {
    margin-top: 32px;
  }
`;

export const QrCode = styled.button`
  @media (min-width: 1230px) {
    position: relative;
    margin-top: 16px;
    width: 34px;
    height: 34px;
    padding: 0;
    color: ${p => p.theme.colors.textColor};
    background-image: url(${qr_template});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
    border: 1px solid ${p => p.theme.colors.qrCodeBorder};
    transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;
    cursor: pointer;

    /* &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 0;
      height: 0;
      border-radius: 4px;
      background-image: url(${qr});
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0;
      transition: scale 300ms ease-in-out, translate 300ms ease-in-out,
        opacity 300ms ease-in-out, width 300ms ease-in-out,
        height 300ms ease-in-out;
    }

    &:hover::before {
      width: 300px;
      height: 300px;
      opacity: 1;
      translate: -450px -400px;
      scale: 1;
    } */

    &:hover,
    :focus {
      box-shadow: 0px 0px 7px 0px ${p => p.theme.colors.qrCodeShadow};
      transform: scale(1.1);
    }
  }
`;
