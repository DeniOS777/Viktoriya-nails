import React from 'react';
import { useMedia } from 'react-use';
import { useThemeContext } from 'context/themeContext';
import {
  BackPanel,
  CheckBox,
  Switcher,
  MoonIcon,
  SunIcon,
} from './ThemeToggler.styled';

export const ThemeToggler = ({ mobile }) => {
  const { theme, switchTheme } = useThemeContext();
  const isMobile = useMedia('(max-width: 767px)');

  return (
    <>
      <BackPanel htmlFor="theme" mobile={mobile}>
        <MoonIcon size={isMobile ? 18 : 14} aria-label="dark theme" />
        <SunIcon size={isMobile ? 18 : 14} aria-label="light theme" />
        <CheckBox
          id="theme"
          type="checkbox"
          name="theme"
          onChange={switchTheme}
          checked={theme === 'light' ? false : true}
        />
        <Switcher mode={theme} mobile={mobile} />
      </BackPanel>
    </>
  );
};
