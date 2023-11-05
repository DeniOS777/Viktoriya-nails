import React from 'react';
import { useMedia } from 'react-use';
import { Navigation } from 'components/Navigation';
import { Social } from 'components/Social';
import { ThemeToggler } from 'components/ThemeToggler';
import { LanguageSelect } from 'components/LanguageSelect';
import { Phone } from 'components/Phone';
import { NavMenu } from './SideMenu.styled';
import { useMobileMenuContext } from 'context/mobileMenuContext';

export const SideMenu = () => {
  const { isMenuOpen } = useMobileMenuContext();
  const isMobile = useMedia('(max-width: 767px)');

  return (
    <NavMenu className={isMenuOpen ? 'activMenu' : ''}>
      <Navigation />
      <Social />
      <Phone mobile />
      <ThemeToggler mobile={isMobile} />
      <LanguageSelect mobile={isMobile} />
    </NavMenu>
  );
};
