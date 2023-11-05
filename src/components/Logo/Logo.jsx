import React from 'react';
import logo from '../../images/logo.svg';
import { SiteLogo } from './Logo.styled';

export const Logo = () => {
  return (
    <SiteLogo href="/">
      <img src={logo} alt="logo" />
    </SiteLogo>
  );
};
