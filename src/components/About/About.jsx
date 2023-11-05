import React from 'react';
import { useTranslation } from 'react-i18next';
import image from '../../images/about_image.jpg';
import {
  Section,
  Container,
  Wrapper,
  ImageThumb,
  Title,
  Text,
} from './About.styled';

export const About = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <Title>{t('about.title')}</Title>
        <Wrapper>
          <ImageThumb>
            <img src={image} alt="manicure" />
          </ImageThumb>
          <Text>{t('about.text')}</Text>
        </Wrapper>
      </Container>
    </Section>
  );
};
