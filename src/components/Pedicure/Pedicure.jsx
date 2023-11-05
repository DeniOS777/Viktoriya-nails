import React from 'react';
import { useTranslation } from 'react-i18next';
import { PedicureList } from './Pedicure.styled';

export const Pedicure = () => {
  const { t } = useTranslation();

  return (
    <PedicureList>
      <li>
        <p>1. {t('price.pedicure.text1')}</p>
        <span>300{t('price.amount')}</span>
      </li>
      <li>
        <p>2. {t('price.pedicure.text2')}</p>
        <span>300{t('price.amount')}</span>
      </li>
      <li>
        <p>3. {t('price.pedicure.text3')}</p>
        <span>400{t('price.amount')}</span>
      </li>
    </PedicureList>
  );
};
