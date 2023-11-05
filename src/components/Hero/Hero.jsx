import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Section,
  Container,
  Wrapper,
  Title,
  Text,
  Name,
  Link,
} from './Hero.styled';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>
            <span>beauty</span> & <br /> style
          </Title>
          <Text>
            <span>{t('hero.text1')}</span> {t('hero.text2')}
          </Text>
          <Name>{t('hero.name')}</Name>
          <Link href="#price">{t('hero.button')}</Link>
        </Wrapper>
      </Container>
    </Section>
  );
};
