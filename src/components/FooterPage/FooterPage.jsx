import { useState } from 'react';
import { useMedia } from 'react-use';
import { useTranslation } from 'react-i18next';
import { Logo } from 'components/Logo';
import { Social } from 'components/Social';
import { Phone } from 'components/Phone';
import {
  Footer,
  Container,
  Wrapper,
  WrapLeft,
  WrapRight,
  Menu,
  Link,
  QrCode,
} from './FooterPage.styled';

import { DialogModal } from 'components/DialogModal';

const items = [
  {
    href: '/',
    label: 'footer.navigation.link1',
  },
  {
    href: '#portfolio',
    label: 'footer.navigation.link2',
  },
  {
    href: '#price',
    label: 'footer.navigation.link3',
  },
  {
    href: '#contacts',
    label: 'footer.navigation.link4',
  },
];

export const FooterPage = () => {
  const isDesktop = useMedia('(min-width: 1230px)');
  const [isOpened, setIsOpened] = useState(false);
  const { t } = useTranslation();

  const toggleModal = () => setIsOpened(isShow => !isShow);

  return (
    <Footer id="contacts">
      <Container>
        <Wrapper>
          <WrapLeft>
            <Logo />
            <Menu>
              {items.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href}>{t(`${label}`)}</Link>
                </li>
              ))}
            </Menu>
          </WrapLeft>
          <WrapRight>
            <Social />
            <Phone />
            {isDesktop && (
              <>
                <QrCode type="button" onClick={toggleModal} />
                <DialogModal onToggle={toggleModal} isOpened={isOpened} />
              </>
            )}
          </WrapRight>
        </Wrapper>
      </Container>
    </Footer>
  );
};
