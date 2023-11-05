import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from './LanguageSelect.styled';

export const LanguageSelect = ({ mobile }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(() => i18n.resolvedLanguage);

  const changeLanguage = e => {
    i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value);
  };

  return (
    <Select
      name="language"
      id="language"
      onChange={changeLanguage}
      lang={language}
      mobile={mobile}
    >
      <option value="ru">ru</option>
      <option value="uk">uk</option>
      <option value="en">en</option>
    </Select>
  );
};
