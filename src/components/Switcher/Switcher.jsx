import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonGroup, Button } from './Switcher.styled';

export const Switcher = ({ mode }) => {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();

  return (
    <ButtonGroup>
      <Button
        onClick={() => {
          setIsActive(false);
          mode('маникюр');
        }}
        activ={!isActive}
      >
        {t('price.button1')}
      </Button>
      <Button
        onClick={() => {
          setIsActive(true);
          mode('педикюр');
        }}
        activ={isActive}
      >
        {t('price.button2')}
      </Button>
    </ButtonGroup>
  );
};
