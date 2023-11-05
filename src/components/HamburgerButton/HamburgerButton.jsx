import React from 'react';
import { MenuButton, Bar } from './HamburgerButton.styled';
import { useMobileMenuContext } from 'context/mobileMenuContext';

export const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useMobileMenuContext();

  return (
    <MenuButton
      className={isMenuOpen ? 'activ' : ''}
      type="button"
      onClick={toggleMenuMode}
      aria-label="mobile menu"
    >
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  );
};
