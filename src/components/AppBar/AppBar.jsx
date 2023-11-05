import { useEffect } from 'react';
import { useMedia } from 'react-use';
import { Logo } from 'components/Logo';
import { Navigation } from 'components/Navigation';
import { MobileMenu } from 'components/MobileMenu';
import { ThemeToggler } from 'components/ThemeToggler';
import { LanguageSelect } from 'components/LanguageSelect';
import { Phone } from 'components/Phone';
import { Header, Container, Wrapper, Wrap, Controls } from './AppBar.styled';
import { useMobileMenuContext } from 'context/mobileMenuContext';

export const AppBar = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const { isMenuOpen } = useMobileMenuContext();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('js-isMobileMenuOpen');
    }
    return () => {
      document.body.classList.remove('js-isMobileMenuOpen');
    };
  }, [isMenuOpen]);

  return (
    <Header>
      <Container>
        <Wrapper>
          <Logo />
          {isMobile ? (
            <MobileMenu />
          ) : (
            <>
              <Navigation />
              <Wrap>
                <Phone />
                <Controls>
                  <ThemeToggler />
                  <LanguageSelect />
                </Controls>
              </Wrap>
            </>
          )}
        </Wrapper>
      </Container>
    </Header>
  );
};
