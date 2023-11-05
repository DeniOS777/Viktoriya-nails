import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section, Container, Title, Text, Gallery } from './Portfolio.styled';
import items from './data.json';

export const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <Section id="portfolio">
      <Container>
        <Title>{t('portfolio.title')}</Title>
        <Text>{t('portfolio.text')}</Text>
        <Gallery>
          {items.map((item, idx) => (
            <li key={idx}>
              <img src={item.source} alt={item.description} />
            </li>
          ))}
        </Gallery>
      </Container>
    </Section>
  );
};
