import React from 'react';
import { useTranslation } from 'react-i18next';
import { ManicureList } from './Manicure.styled';

export const Manicure = () => {
  const { t } = useTranslation();

  return (
    <ManicureList>
      <li>
        <p>1. {t('price.manicure.text1')}</p>
        <span>150{t('price.amount')}</span>
      </li>
      <li>
        <p>2. {t('price.manicure.text2')}</p>
        <span>300{t('price.amount')}</span>
      </li>
      <li>
        <p>3. {t('price.manicure.text3')}</p>
        <span>500{t('price.amount')}</span>
      </li>
      <li>
        <p>4. {t('price.manicure.text4')}</p>
        <span>550{t('price.amount')}</span>
      </li>
      <li>
        <p>5. {t('price.manicure.text5')}</p>
        <span>350{t('price.amount')}</span>
      </li>
      <li>
        <p>6. {t('price.manicure.text6')}</p>
        <span>40{t('price.amount')}</span>
      </li>
    </ManicureList>
  );
};
