// import React from 'react';
import { useRef } from 'react';
import { HamburgerButton } from 'components/HamburgerButton';
import { SideMenu } from 'components/SideMenu';
import { useOnClickOutside } from 'hooks/onClickOutside';
import { useMobileMenuContext } from 'context/mobileMenuContext';

export const MobileMenu = () => {
  const { isMenuOpen, toggleMenuMode } = useMobileMenuContext();
  const node = useRef();

  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <div ref={node}>
      <HamburgerButton />
      <SideMenu />
    </div>
  );
};
