import { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { useThemeContext } from 'context/themeContext';
import { lightTheme, darkTheme } from 'constants/theme';
import { About } from 'components/About';
import { AppBar } from 'components/AppBar';
import { Hero } from 'components/Hero';
import { Portfolio } from 'components/Portfolio';
import { Price } from 'components/Price';
import { Reviews } from 'components/Reviews';
import { FooterPage } from 'components/FooterPage';
import { ButtonToTop } from 'components/ButtonToTop';
import { MobileMenuProvider } from 'context/mobileMenuContext';

const App = () => {
  const { theme } = useThemeContext();
  const [isShowBtn, setIsShowBtn] = useState(false);
  const { y: scrollPositionY } = useWindowScroll();

  useEffect(() => {
    const handleScroll = () => {
      const trigger = document.body.clientHeight;
      if (scrollPositionY > trigger * 0.75) {
        setIsShowBtn(true);
      } else if (scrollPositionY < 50) {
        setIsShowBtn(false);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPositionY]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <MobileMenuProvider>
        <AppBar />
        <main>
          <Hero />
          <Portfolio />
          <About />
          <Price />
          <Reviews />
        </main>
        <FooterPage />
        <ButtonToTop show={isShowBtn} />
      </MobileMenuProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
