import React from 'react';
import { useTranslation } from 'react-i18next';
import { LiaAngleUpSolid } from 'react-icons/lia';
import { scrollToTop } from 'helpers/scrollToTop';
import { Button } from './ButtonToTop.styled';

export const ButtonToTop = ({ show }) => {
  const { t } = useTranslation();
  const handleClick = () => scrollToTop();

  return (
    <Button
      className={show ? 'activ' : ''}
      type="button"
      onClick={handleClick}
      aria-label="to top the site"
      title={t('btnToTop')}
    >
      <LiaAngleUpSolid />
    </Button>
  );
};
