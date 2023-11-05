import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switcher } from 'components/Switcher';
import { Manicure } from 'components/Manicure';
import { Section, Container, Title } from './Price.styled';
import { Pedicure } from 'components/Pedicure';

export const Price = () => {
  const [showPrice, setShowPrice] = useState('маникюр');
  const { t } = useTranslation();

  const chooseMode = data => setShowPrice(data);

  return (
    <Section id="price">
      <Container>
        <Title>{t('price.title')}</Title>
        <Switcher mode={chooseMode} />
        {showPrice === 'маникюр' && <Manicure />}
        {showPrice === 'педикюр' && <Pedicure />}
      </Container>
    </Section>
  );
};
